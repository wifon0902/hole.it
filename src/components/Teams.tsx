import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";

function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetchTeams();
  }, []);
  async function fetchTeams() {
    const { data } = await supabase
      .from("teams")
      .select("*")
      .order("created_at", { ascending: false });
    setTeams(data || []);
    console.log("data: ", data);
  }
  return (
    <div>
      {teams.map((team) => (
        <div key={team.id} className="border p-4 mb-4">
          <h2 className="text-xl font-bold">{team.name}</h2>
          <p>
            <strong>Captain:</strong> {team.captain}
          </p>
          <p>
            <strong>Email:</strong> {team.email}
          </p>
          <p>
            <strong>Map:</strong> {team.map}
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {new Date(team.created_at).toLocaleString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Teams;
