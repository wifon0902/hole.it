import Card from "@/components/Card";
import { UsersRound, Swords, Trophy } from "lucide-react";

const cardData = [
  {
    title: "Zapisz drużynę",
    description:
      "Stwórz skład, wypełnij formularz i dołącz do rywalizacji. Zgłoszenie zajmuje tylko kilka minut!",
    icon: UsersRound,
  },
  {
    title: "Weź udział w meczach",
    description:
      "Zmierz się z innymi drużynami w fazie eliminacyjnej. Pokaż, na co was stać i awansuj dalej!",
    icon: Swords,
  },
  {
    title: "Zdominuj i zgarnij nagrody",
    description:
      "Przejdź przez drabinkę turniejową, pokonaj najlepszych i wygraj atrakcyjne nagrody!",
    icon: Trophy,
  },
];

function Cards() {
  return (
    <div
      id="rules"
      className="bg-zinc-950 flex md:justify-center py-20 md:flex-row md:items-start items-center flex-col gap-8 p-8 text-center"
    >
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
