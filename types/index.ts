export type Pokemon = {
  name: string;
  url: string;
};

export type Pokemons = Pokemon[];

export type PokemonsGotten = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemons;
};
