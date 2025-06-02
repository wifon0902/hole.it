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
      className="bg-zinc-950 flex justify-center flex-col py-20 p-8 text-center"
    >
      <h1 className="text-5xl pb-10">Jak wziąć udział?</h1>
      <div className="flex md:justify-center md:items-start md:flex-row items-center flex-col gap-8">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            icon={card.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default Cards;
