import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons, PokemonsState } from '../features/pokemons';
import { Pokemons } from '../types';

export const usePokemons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const pokemons = useSelector<PokemonsState, Pokemons>(
    (state) => state.pokemons
  );
  const dispatch = useDispatch();
  const getPokemonId = (url: string) => Number(url.split('/').slice(-2)[0]);
  const getPokemonImageURL = (id: number) =>
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      await dispatch(fetchPokemons());
      setIsLoading(false);
    };

    void load();
  }, [dispatch]);

  const pokemonData = pokemons.map((pokemon) => {
    const id = getPokemonId(pokemon.url);
    const name = pokemon.name;
    const imageUrl = getPokemonImageURL(id);

    return {
      id,
      name,
      imageUrl,
    };
  });

  return { pokemons: pokemonData, isLoading };
};
