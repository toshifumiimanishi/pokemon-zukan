import { apiClient } from './apiClient';
import { PokemonsGotten } from '../../../types';

export const getPokemons = async () => {
  const response = await apiClient.get<PokemonsGotten>('pokemon');
  const pokemons = response.data.results;

  return pokemons;
};
