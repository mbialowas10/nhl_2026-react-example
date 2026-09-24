import { useState } from "react";
import { nhlTeams } from "../data/nhlTeams";


export function TeamWithState() {
  // Store the selected teams id in state
  const [selectedTeamId, setSelectedTeamId] = useState<number>(0);

  // find the team that matches the selected id
  const selectedTeam = nhlTeams.find(
    (team) => team.id == selectedTeamId
  )!;

 return (
    <div>
      <h2>NHL Player Lookup</h2>

      <label htmlFor="team">Select a team: </label>

      <select
        id="team"
        value={selectedTeamId}
        onChange={(event) =>
          setSelectedTeamId(Number(event.target.value))
        }
      >
        <option value={0}>-- Select an NHL Team --</option>

        {nhlTeams.map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
      </select>

      {selectedTeam && (
        <div>
          <h3>{selectedTeam.name}</h3>

          <h4>Players</h4>

          <ul>
            {selectedTeam.players.map((player) => (
              <li key={player.id}>
                {player.name} - {player.position}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}