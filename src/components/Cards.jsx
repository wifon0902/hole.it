import React from "react";
import Card from "@/components/card";
import { UsersRound } from "lucide-react";

const cardData = [
  {
    title: "Zapisz drużynę",
    description:
      "Zapisz swoją drużynę do rozgrywek i zacznij rywalizować z innymi.",
    icon: UsersRound,
  },
];

function Cards() {
  return (
    <div>
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          icon={card.icon}
        />
      ))}
    </div>
  );
}

export default Cards;
