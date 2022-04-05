export interface Turn {
  id: number;
  name: string;
  selected: boolean;
}

export const TURNS: Turn[] = [
  { id: 1, name: '1. Forduló', selected: true},
  { id: 2, name: '2. Forduló', selected: false},
  { id: 3, name: '3. Forduló', selected: false},
];
