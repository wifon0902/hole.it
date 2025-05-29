import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from "lucide-react";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="absolute top-0 left-0 h-18 w-full text-zinc-200 z-50 flex justify-center">
      <div className="max-w-7xl w-full flex justify-between items-center px-6 border-b border-zinc-700">
        <h1 className="text-3xl font-bold text-main-accent">hole.it</h1>

        <ul className="hidden md:flex gap-10 uppercase text-zinc-300">
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            Home
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            Jak grać?
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            Drużyny
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            Nagrody
          </li>
          <li className="p-2 cursor-pointer hover:text-zinc-400 transition-all">
            Kontakt
          </li>
          <div className="hidden md:block ml-10">
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

      <div
        className={`fixed top-0 left-0 w-[80%] sm:w-[50%] h-full bg-primary border-r border-zinc-800 text-white p-6 transition-all duration-300 z-40 ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <h1 className="text-3xl font-bold text-main-accent mb-6">hole.it</h1>
        <ul className="flex flex-col gap-4">
          <li className="border-b border-zinc-700 pb-2 cursor-pointer hover:text-zinc-400">
            Home
          </li>
          <li className="border-b border-zinc-700 pb-2 cursor-pointer hover:text-zinc-400">
            Jak grać?
          </li>
          <li className="border-b border-zinc-700 pb-2 cursor-pointer hover:text-zinc-400">
            Drużyny
          </li>
          <li className="border-b border-zinc-700 pb-2 cursor-pointer hover:text-zinc-400">
            Nagrody
          </li>
          <li className="cursor-pointer hover:text-zinc-400">Kontakt</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
