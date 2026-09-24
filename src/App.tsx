import { TeamWithoutState } from "./components/TeamWithoutState";
import { TeamWithState } from "./components/TeamWithState";

export default function App() {
  return (
    <main>
      <h1>NHL Roster Explorer</h1>
      <p>React State vs. Regular Variables</p>

      <TeamWithoutState />

      <hr />

      <TeamWithState />
    </main>
  );
}
