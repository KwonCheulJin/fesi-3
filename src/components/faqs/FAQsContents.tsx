import FAQsContent from "@/components/faqs/FAQsContent";

export type Content = {
  id: number;
  title: string;
  description: string;
};

type FAQsContentsProps = {
  contents: Array<Content>;
};
export default function FAQsContents({ contents }: FAQsContentsProps) {
  return (
    <ul className="space-y-10">
      {contents.map((content) => (
        <FAQsContent
          key={content.id}
          title={content.title}
          description={content.description}
        />
      ))}
    </ul>
  );
}
