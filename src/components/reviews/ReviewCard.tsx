import Stars from "@/components/reviews/Stars";

type ReviewCardProps = {
  title: string;
  description: string;
  author: string;
  index: number;
};
export default function ReviewCard({
  title,
  description,
  author,
  index,
}: ReviewCardProps) {
  const condition = (index % 5) / 10;
  const delay = condition === 0 ? 0.5 : condition;
  return (
    <figure
      className="animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5"
      style={{ animationDelay: `${delay}s` }}
    >
      <blockquote className="text-gray-900">
        <Stars />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{description}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  );
}
