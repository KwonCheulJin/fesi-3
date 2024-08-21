import Link from "next/link";

export default function VideoLink() {
  return (
    <Link
      className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
      href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="h-6 w-6 flex-none"
      >
        <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4"></circle>
        <path
          d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
          fill="#A3A3A3"
          stroke="#A3A3A3"
        ></path>
      </svg>
      <span className="ml-2.5">Watch the video</span>
    </Link>
  );
}
