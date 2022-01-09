interface Stats {
  key: string;
  value: string | number;
}

export default interface Pokemon {
  name?: string;
  image?: string;
  stats?: Stats[];
}
