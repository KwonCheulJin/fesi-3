import ReviewCard from "@/components/reviews/ReviewCard";

type Review = {
  author: string;
  title: string;
  description: string;
};
const review1: Array<Review> = [
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
  {
    author: "GeorgeCostanza",
    title: "Quit my job.",
    description:
      "I downloaded Pocket three days ago and quit my job today. I can’t believe no one else thought to build a stock trading app that works this way!",
  },
  {
    author: "CrazyInvestor",
    title: "It really works.",
    description:
      "I downloaded Pocket today and turned $5000 into $25,000 in half an hour.",
  },
  {
    author: "JordanBelfort1962",
    title: "Screw financial advisors.",
    description:
      "I barely made any money investing in mutual funds. With Pocket, I’m doubling my net-worth every single month.",
  },
  {
    author: "SarahLuvzCash",
    title: "Wish I could give 6 stars",
    description:
      "This is literally the most important app you will ever download in your life. Get on this before it’s so popular that everyone else is getting these tips too.",
  },
  {
    author: "RichieRich",
    title: "I’m 13 and I’m rich.",
    description:
      "I love that with Pocket’s transaction anonymization I could sign up and start trading when I was 12 years old. I had a million dollars before I had armpit hair!",
  },
];
export default function ReviewCards() {
  return (
    <ul className="animate-vertical-loop space-y-8 py-4">
      {review1.map((review, i) => (
        <ReviewCard
          key={`${review.author}-${i}`}
          index={i}
          title={review.title}
          description={review.description}
          author={review.author}
        />
      ))}
    </ul>
  );
}
