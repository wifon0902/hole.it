import React from "react";

function Card({ title, description, icon: Icon }) {
  return (
    <div className="text-white flex flex-col justify-center items-center w-100 gap-4 px-10">
      <Icon className="hidden md:block mb-8  text-card-accent size-20" />
      <h3 className="text-lg uppercase text-zinc-200 font-bold">{title}</h3>
      <p className="text-center text-zinc-400">{description}</p>
    </div>
  );
}

export default Card;
