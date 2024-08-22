type FAQsContentProps = {
  title: string;
  description: string;
};
export default function FAQsContent({ title, description }: FAQsContentProps) {
  return (
    <li>
      <h3 className="text-lg font-semibold leading-6 text-gray-900">{title}</h3>
      <p className="mt-4 text-sm text-gray-700">{description}</p>
    </li>
  );
}
