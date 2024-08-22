import FAQsContents, { Content } from "@/components/faqs/FAQsContents";

const contents1: Array<Content> = [
  {
    id: 1,
    title: "How do I know the tips are good?",
    description:
      "Our whole business depends on our tips being good, so it’s in our best interest that they are. The results of our customers speak for themselves, just trust us.",
  },
  {
    id: 2,
    title: "Isn’t this insider trading?",
    description:
      "Yes exactly. But at scale! Historically you could only make insider trades with knowledge from your direct network. Pocket brings you insider trading tips from people you don’t even know.",
  },
  {
    id: 3,
    title: "But isn’t insider trading illegal?",
    description:
      "Here’s the thing: you’re the one doing the insider trading, not us. We’re just giving you the tips and some tools to make trades. We’re not doing anything wrong here.",
  },
];
const contents2: Array<Content> = [
  {
    id: 4,
    title: "Do the people giving you tips realize what they are doing?",
    description:
      "Again I would argue this isn’t really our responsibility. People make their own choices. If they don’t research the consequences that’s on them, not on us.",
  },
  {
    id: 5,
    title: "Where is Pocket based?",
    description:
      "Let’s just say it’s not somewhere where the SEC is going to find us.",
  },
  {
    id: 6,
    title: "Is there any age limit to trading on Pocket?",
    description:
      "For our free plan, the age limit is based on the minimum age to trade in your country of residence. Our VIP plan uses advanced transaction anonymization though, so you can use that plan even if you’re 9 years old. Or a dog.",
  },
];
const contents3: Array<Content> = [
  {
    id: 7,
    title: "How did you get this on the App Store?",
    description:
      "Honestly we were surprised too, but eventually we found out that the app reviewer found the app so compelling they approved it just so they could use it themselves.",
  },
  {
    id: 8,
    title: "How do I explain the money I withdraw from Pocket to the IRS?",
    description:
      "This feels like one-hundred percent a you problem. Pocket is not responsible in any way for your tax returns.",
  },
  {
    id: 9,
    title: "How do I become an insider?",
    description:
      "Contact us with some details about your industry and the type of access you have to apply for an insider account. Once approved, we’ll send you a guide on collecting insider information without being detected at work.",
  },
];

export default function FAQsContentsGroup() {
  return (
    <ul className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
      <FAQsContents contents={contents1} />
      <FAQsContents contents={contents2} />
      <FAQsContents contents={contents3} />
    </ul>
  );
}
