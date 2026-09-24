export interface Player {
  id: number;
  name: string;
  position: string;
}

export interface Team {
  id: number;
  name: string;
  players: Player[];
}

export const nhlTeams: Team[] = [
  {
    id: 1,
    name: "Winnipeg Jets",
    players: [
      { id: 1, name: "Mark Scheifele", position: "Centre" },
      { id: 2, name: "Kyle Connor", position: "Left Wing" },
      { id: 3, name: "Connor Hellebuyck", position: "Goalie" }
    ]
  },
  {
    id: 2,
    name: "Edmonton Oilers",
    players: [
      { id: 4, name: "Connor McDavid", position: "Centre" },
      { id: 5, name: "Leon Draisaitl", position: "Centre" }
    ]
  },
  {
    id: 3,
    name: "Toronto Maple Leafs",
    players: [
      { id: 6, name: "Auston Matthews", position: "Centre" },
      { id: 7, name: "William Nylander", position: "Right Wing" }
    ]
  }
];