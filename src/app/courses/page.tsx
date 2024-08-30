"use client";
import CourseInfo from "@/components/course/CourseInfo";
import SearchInput from "@/components/course/SearchInput";
import SelectBox from "@/components/course/SelectBox";
import { Course, CourseType } from "@/models/course";
import { Spinner } from "@nextui-org/react";
import Head from "next/head";
import React from "react";
import useSWR from "swr";

export const courseTypeLabels: { [key in CourseType]: string } = {
  LEGACY: "Legacy",
  V1: "Version 1",
  V2: "Version 2",
  V3: "Version 3",
};

function CourseList(props: { courses: Course[] }) {
  const { courses } = props;
  if (courses.length === 0) {
    return (
      <div className="mt-16 flex flex-col items-center gap-4">
        <p>검색 조건에 맞는 강의가 없습니다.</p>
      </div>
    );
  }
  return (
    <ul className="mt-10 flex flex-col gap-5">
      {courses.map((course, index) => (
        <li key={index} data-testid="course-info">
          <CourseInfo {...course} />
        </li>
      ))}
    </ul>
  );
}

type CourseFilter = "ALL" | CourseType;

const courseFilterLabels: { [key in CourseFilter]: string } = {
  ALL: "모든 타입",
  ...courseTypeLabels,
};

export default function Home() {
  const [courseType, setCourseType] = React.useState<CourseFilter>("ALL");
  const [query, setQuery] = React.useState("");
  const selectItems = Object.entries(courseFilterLabels).map((e) => ({
    key: e[0],
    label: e[1],
  }));

  const { data, error, isLoading } = useSWR<Course[]>(
    process.env.NEXT_PUBLIC_API_ENDPOINT,
  );
  const filteredCourses = (data ?? [])
    .filter((c) => (courseType === "ALL" ? true : c.courseType === courseType))
    .filter((c) => !query || c.courseTitle.includes(query));

  return (
    <>
      <Head>
        <title>Codeit</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="pb-16">
        <div className="mx-auto w-full max-w-screen-lg px-4">
          <div className="mt-16">
            <p className="text-3xl font-bold">코드댓 강의 검색 시스템</p>
          </div>

          {isLoading && (
            <div className="flex min-h-80 items-center justify-center">
              <Spinner />
            </div>
          )}
          {!isLoading &&
            (error ? (
              <div>오류가 발생했습니다.</div>
            ) : (
              <>
                <div className="mt-5 grid grid-cols-12 gap-3.5">
                  <div className="col-span-12 sm:col-span-2">
                    <SelectBox
                      items={selectItems}
                      initialItem={{
                        key: courseType,
                        label: courseFilterLabels[courseType],
                      }}
                      onSelect={(key) => setCourseType(key as CourseType)}
                    />
                  </div>
                  <div className="col-span-12 sm:col-span-8">
                    <SearchInput onSearch={setQuery} />
                  </div>
                </div>

                <CourseList courses={filteredCourses} />
              </>
            ))}
        </div>
      </main>
    </>
  );
}
