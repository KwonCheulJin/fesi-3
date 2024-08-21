import Image from "next/image";

type CompanyImage = {
  width: number;
  src: string;
  alt: string;
  isMobile: boolean;
};

const images: Array<CompanyImage> = [
  {
    width: 82,
    src: "/forbes.svg",
    alt: "Forbes",
    isMobile: false,
  },
  {
    width: 181,
    src: "/techcrunch.svg",
    alt: "Techcrunch",
    isMobile: false,
  },
  {
    width: 121,
    src: "/wired.svg",
    alt: "Wired",
    isMobile: false,
  },
  {
    width: 68,
    src: "/cnn.svg",
    alt: "CNN",
    isMobile: true,
  },
  {
    width: 83,
    src: "/bbc.svg",
    alt: "BBC",
    isMobile: false,
  },
  {
    width: 83,
    src: "/cbs.svg",
    alt: "CBS",
    isMobile: false,
  },
  {
    width: 124,
    src: "/fast-company.svg",
    alt: "Fast Company",
    isMobile: false,
  },
  {
    width: 142,
    src: "/huffpost.svg",
    alt: "Huffpost",
    isMobile: true,
  },
];
export default function CompanyImages() {
  return (
    <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
      <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
        As featured in
      </p>
      <ul className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
        {images.map((image) => (
          <li
            key={image.src}
            className={`flex${image.isMobile ? "hidden xl:block" : ""}`}
          >
            <Image
              width={image.width}
              height={32}
              className="h-8"
              src={image.src}
              alt={image.alt}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
