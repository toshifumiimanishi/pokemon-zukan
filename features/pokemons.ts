import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Pokemons } from '../types';
import { getPokemons } from '../domains/pokemon/services/getPokemons';

export type PokemonsState = { pokemons: Pokemons };

const initialState: PokemonsState = {
  pokemons: [],
};

export const fetchPokemons = createAsyncThunk(
  'pokemon/pokemonsGotten',
  async () => {
    const pokemons = await getPokemons();
    return pokemons;
  }
);

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemons.fulfilled, (state, action) => {
      state.pokemons = action.payload;
    });
  },
});
