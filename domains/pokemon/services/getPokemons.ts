import { apiClient } from './apiClient';

export const getPokemons = async () => {
  const response = await apiClient.v2.pokemon.get();
  const pokemons = response.body.results;

  return pokemons;
};
