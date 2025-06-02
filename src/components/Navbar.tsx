import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const closeNav = () => {
    setNav(false);
  };

  return (
    <nav className="absolute top-0 left-0 h-18 w-full text-zinc-200 z-50 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center px-6 border-b border-zinc-700">
        <h1 className="text-3xl font-bold text-main-accent">hole.it</h1>

        <ul className="hidden md:flex gap-6 lg:gap-10 uppercase text-zinc-300">
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            <a href="#rules">Jak grać?</a>
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            <a href="">Drużyny</a>
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            <a href="">Nagrody</a>
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            <a href="">Kontakt</a>
          </li>
          <div className="hidden md:block pl-10">
            <Button variant="accent" size="lg" className="rounded-xs">
              <Rocket className="size-4" />
              Wystartuj!
            </Button>
          </div>
        </ul>

        <div className="md:hidden z-50 cursor-pointer" onClick={handleNav}>
          {nav ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-transparent bg-opacity-50 z-30 md:hidden"
          onClick={closeNav}
        />
      )}

      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[50%] h-full bg-primary border-r border-zinc-800 text-white p-6 transition-all duration-300 z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-main-accent mb-6">hole.it</h1>
        <ul className="flex flex-col gap-4">
          <li className="border-b border-zinc-700 pb-2 hover:text-zinc-400">
            <a href="">Jak grać?</a>
          </li>
          <li className="border-b border-zinc-700 pb-2 hover:text-zinc-400">
            <a href="">Drużyny</a>
          </li>
          <li className="border-b border-zinc-700 pb-2 hover:text-zinc-400">
            <a href="">Nagrody</a>
          </li>
          <li className=" hover:text-zinc-400">
            <a href="">Kontakt</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
