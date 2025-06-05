import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
import { Separator } from "@/components/ui/separator";
import { Crown } from "lucide-react";
import DustImg from "../assets/dust.jpg";
import MirageImg from "../assets/mirage.jpg";
import InfernoImg from "../assets/inferno.jpg";
import NukeImg from "../assets/nuke.jpg";

const mapImage = {
  dust: DustImg,
  mirage: MirageImg,
  inferno: InfernoImg,
  nuke: NukeImg,
};

type Team = {
  id: number;
  name: string;
  captain: string;
  email: string;
  status: string;
  map: keyof typeof mapImage;
  created_at?: string;
};

function Teams() {
  const [teams, setTeams] = useState<Team[]>([]);
  useEffect(() => {
    fetchTeams();
  }, []);
  async function fetchTeams() {
    const { data } = await supabase
      .from("teams")
      .select("*")
      .order("status", { ascending: false })
      .order("created_at", { ascending: true });
    setTeams((data as Team[]) || []);
  }
  return (
    <div id="teams" className="my-40 w-full flex flex-col items-center">
      <h2 className="text-center font-bold text-5xl pb-12">
        Drużyny{" "}
        <span className="bg-gradient-to-r from-[#ec6227] to-[#ebb540] bg-clip-text text-transparent">
          w grze...
        </span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10">
        {teams.map((team) => (
          <div key={team.id} className="flex flex-row">
            <img
              className="md:h-44 h-30 md:rounded-sm"
              src={mapImage[team.map]}
            />
            <div className="md:my-1 px-2 md:px-8 rounded-r-lg flex flex-col justify-around gap-2 w-full bg-zinc-950 ">
              <div className="space-y-1">
                <h2 className="uppercase font-bold">{team.name}</h2>
                <span className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Crown size="14" />
                  {team.captain}
                </span>
              </div>
              <div className="flex h-5 items-center space-x-4 text-sm text-muted-foreground">
                <div className="relative flex items-center justify-center w-3 h-3">
                  {/* Zewnętrzna poświata */}
                  <span
                    className={`absolute inline-flex w-3 h-3 rounded-full blur-xs opacity-70 ${
                      team.status ? "bg-green-300" : "bg-yellow-300"
                    }`}
                  ></span>

                  {/* Wewnętrzna kropka */}
                  <span
                    className={`relative inline-flex w-1.5 h-1.5 rounded-full ${
                      team.status ? "bg-green-500" : "bg-yellow-500"
                    }`}
                  ></span>
                </div>

                <div>{team.status ? "zatwierdzony" : "oczekujący"}</div>
                <Separator orientation="vertical" />
                <div>{team.map}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Teams;
