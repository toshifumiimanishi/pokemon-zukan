import { apiClient } from './apiClient';

export const getPokemonList = () => apiClient.get('pokemon');