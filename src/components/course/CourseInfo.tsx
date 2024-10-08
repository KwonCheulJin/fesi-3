import { courseTypeLabels } from "@/components/course/SelectBox";
import { Course, CourseLanguage } from "@/models/course";

import { Card, CardBody, Chip } from "@nextui-org/react";
import moment from "moment";

const colorVariants: { [key in CourseLanguage]: string } = {
  Python: "bg-yellow-500",
  "C++": "bg-purple-900",
  Java: "bg-cyan-500",
  JavaScript: "bg-orange-500",
  Go: "bg-red-800",
};

function CourseInfoDetail({
  title,
  description,
}: {
  title: string;
  description: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-2 text-base sm:text-sm">
      <p className="min-w-20 flex-initial font-semibold">{title}</p>
      <div className="flex-1 text-default-400">{description}</div>
    </div>
  );
}

export default function CourseInfo(props: Course) {
  const {
    courseTitle,
    courseType,
    courseLanguage,
    lessonsInCourse,
    published,
    courseDetailType,
    CourseDetail: courseDetail,
  } = props;
  return (
    <Card>
      <CardBody className="p-4">
        <div className="flex flex-col gap-3.5">
          <div className="mb-2 grid grid-cols-12 gap-3">
            <div className="col-span-12">
              <div className="flex flex-row justify-start">
                <Chip
                  classNames={{
                    base: ["text-white", colorVariants[courseLanguage]],
                  }}
                >
                  {courseLanguage}
                </Chip>
              </div>
            </div>
            <div className="col-span-12">
              <div className="flex flex-1 flex-row items-center gap-2">
                <p className="text-2xl font-bold text-black">{courseTitle}</p>
                <p className="text-default-400">
                  {courseTypeLabels[courseType]}
                </p>
              </div>
            </div>
          </div>

          <CourseInfoDetail
            title={"레슨 개수"}
            description={`${lessonsInCourse}개`}
          />

          <CourseInfoDetail
            title={"출시 일자"}
            description={moment(published).format("YYYY. MM. DD.")}
          />

          <CourseInfoDetail
            title={"코스 소개"}
            description={
              <div>
                {courseDetailType === "plain" ? (
                  <p>{courseDetail}</p>
                ) : (
                  <div dangerouslySetInnerHTML={{ __html: courseDetail }} />
                )}
              </div>
            }
          />
        </div>
      </CardBody>
    </Card>
  );
}
