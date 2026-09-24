import { useState } from "react";
import { nhlTeams } from "../data/nhlTeams";
import type { Team } from "../data/nhlTeams";

export function TeamWithState() {
  // React remembers the selected team
  const [selectedTeam, setSelectedTeam] =
    useState<Team>(nhlTeams[0]);

  function changeTeam() {
    setSelectedTeam(nhlTeams[1]);
  }

  return (
    <div>
      <h2>With State</h2>

      <h3>{selectedTeam.name}</h3>

      <ul>
        {selectedTeam.players.map((player) => (
          <li key={player.id}>
            {player.name} - {player.position}
          </li>
        ))}
      </ul>

      <button onClick={changeTeam}>
        Select Edmonton Oilers
      </button>
    </div>
  );
}