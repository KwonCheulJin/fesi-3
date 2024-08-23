import Star from "@/components/reviews/icon/Star";

export default function Stars() {
  return (
    <ul className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={`start-${i}`} />
      ))}
    </ul>
  );
}
