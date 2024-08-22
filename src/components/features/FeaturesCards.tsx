"use client";
import FeaturesCard from "@/components/features/FeaturesCard";
import First from "@/components/features/icon/First";
import Second from "@/components/features/icon/Second";
import Third from "@/components/features/icon/Third";
import React, { useState } from "react";

type CardItem = {
  id: string;
  title: string;
  description: string;
  image: React.ReactNode;
};

const cardItems: Array<CardItem> = [
  {
    id: "firstCard",
    title: "Invite friends for better returns",
    description:
      "For every friend you invite to Pocket, you get insider notifications 5 seconds sooner. And it’s 10 seconds if you invite an insider.",
    image: <First />,
  },
  {
    id: "secondCard",
    title: "Notifications on stock dips",
    description:
      "Get a push notification every time we find out something that’s going to lower the share price on your holdings so you can sell before the information hits the public markets.",
    image: <Second />,
  },
  {
    id: "thirdCard",
    title: "Invest what you want",
    description:
      "We hide your stock purchases behind thousands of anonymous trading accounts, so suspicious activity can never be traced back to you.",
    image: <Third />,
  },
];

export default function FeaturesCards() {
  const [target, setTarget] = useState("firstCard");
  return (
    <ul className="flex h-auto flex-col justify-between">
      {cardItems.map((cardItem) => (
        <li key={cardItem.id}>
          <FeaturesCard
            title={cardItem.title}
            description={cardItem.description}
            isClicked={cardItem.id === target}
            onClick={() => setTarget(cardItem.id)}
          >
            {cardItem.image}
          </FeaturesCard>
        </li>
      ))}
    </ul>
  );
}
