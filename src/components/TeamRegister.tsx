import TeamForm from "./TeamForm";

function TeamRegister() {
  return (
    <div id="form" className="w-full flex justify-center items-center my-10">
      <div className="relative max-w-7xl bg-[#100d0c] rounded-xl px-10 flex flex-row items-center justify-between gap-10 overflow-hidden">
        <div className="flex flex-col gap-5 flex-3">
          <h3 className="text-6xl font-bold bg-gradient-to-r from-[#ec6227] to-[#ebb540] bg-clip-text text-transparent">
            hole.it League
          </h3>
          <p className="text-zinc-200 text-2xl">
            To pierwsza edycja hole.it league – limit miejsc to tylko 12 drużyn
          </p>
          <p className="text-zinc-400 text-lg">
            Masz ekipę, trochę wolnego czasu i odwagę wejść do gry? Dołącz do
            pierwszej edycji hole.it League i zmierz się z innymi drużynami. Nie
            musisz być zawodowcem – wystarczy trochę skilla, zgrany skład i
            minuta na wypełnienie formularza. Zapisz się już teraz – zanim ktoś
            inny zarezerwuje Twój slot.
          </p>
        </div>
        <TeamForm />

        {/* Refleks */}
        <div
          className="absolute -bottom-40 -left-40 w-120 h-70 pointer-events-none rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, rgba(236, 98, 39, 0.4), transparent 70%)",
            filter: "blur(30px)",
            zIndex: 0,
          }}
        />
      </div>
    </div>
  );
}

export default TeamRegister;
