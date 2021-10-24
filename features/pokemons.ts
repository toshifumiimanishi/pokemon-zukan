import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Pokemons } from '../types';

export type PokemonsState = { pokemons: Pokemons };

const initialState: PokemonsState = {
  pokemons: [],
};

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    pokemonsGotten: (state, action: PayloadAction<PokemonsState>) => ({
      ...state,
      pokemons: action.payload.pokemons,
    }),
  },
});
