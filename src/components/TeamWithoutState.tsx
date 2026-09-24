import { nhlTeams } from "../data/nhlTeams";

export function TeamWithoutState() {
  // Regular TypeScript variable
  let selectedTeam = nhlTeams[0];

  function changeTeam() {
    selectedTeam = nhlTeams[1];

    console.log("Selected:", selectedTeam.name);
  }

  return (
    <div>
      <h2>Without State</h2>

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