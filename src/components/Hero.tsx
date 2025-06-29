import { Button } from "@/components/ui/button";
import Countdown from "@/components/Countdown";
import backgroundImage from "../assets/background.png";

function Hero() {
  return (
    <div className="relative overflow-hidden min-h-screen text-zinc-100 pt-32 flex items-center justify-center px-4">
      {/* Tło */}
      <div
        className="hidden md:block absolute top-0 left-0 h-full w-[200%] animate-scroll-pingpong z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 140%",
          willChange: "transform",
        }}
      />

      {/* Refleks */}
      <div className="absolute top-1/2 left-1/2 w-350 h-350 rounded-full bg-white opacity-4 blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0" />

      {/* Content */}
      <div className="w-full max-w-7xl text-center flex flex-col items-center z-10 pt-10">
        <h1 className="max-w-6xl text-zinc-100 text-3xl md:text-5xl font-bold uppercase">
          Dołącz do lokalnej sceny esportowej <br />i zmierz się z najlepszymi
        </h1>
        <p className="max-w-2xl text-zinc-300 text-xl mt-4">
          Już 7 czerwca startuje hole.it League więc nie przegap szansy na
          udział i zapis swojej drużyny
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-6 py-16 px-4 flex-col md:flex-row">
          <a href="#form">
            <Button variant="accent" size="lg" className="rounded-xs uppercase">
              Zapisz swoją drużynę!
            </Button>
          </a>
          <a href="#rules">
            <Button
              variant="transparent"
              size="lg"
              className="rounded-xs uppercase"
            >
              Dowiedz się więcej
            </Button>
          </a>
        </div>

        {/* Countdown */}
        <Countdown targetDate="2025-06-28T20:00:00" />
      </div>
    </div>
  );
}

export default Hero;
