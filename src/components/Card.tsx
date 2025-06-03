function Card({ title, description, icon: Icon }) {
  return (
    <div className="text-white flex flex-col justify-center items-center w-100 md:h-80 h-40 px-10 gap-4">
      <Icon className="hidden md:block mb-8 text-main-accent size-20 drop-shadow-[0_0_8px_rgba(255,113,0,0.5)]" />
      <h3 className="text-lg uppercase text-zinc-200 font-bold">{title}</h3>
      <p className="text-center text-zinc-400">{description}</p>
    </div>
  );
}

export default Card;
