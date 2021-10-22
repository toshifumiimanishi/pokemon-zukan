import { usePokemons } from '../../hooks/usePokemons';
import Image from 'next/image';

export const PokemonList = () => {
  const { pokemons, isLoading } = usePokemons();
  return (
    <ul className="grid grid-cols-4 gap-5">
      {isLoading
        ? 'Loading..ʕ•́ᴥ•̀ʔ'
        : pokemons.map((pokemon) => (
            <li
              className="flex flex-col items-center py-6 w-72 bg-gray-100 rounded-lg shadow-md"
              key={pokemon.id}
            >
              <p>#{pokemon.id}</p>
              <Image
                src={pokemon.imageUrl}
                width="192"
                height="192"
                layout="fixed"
                alt=""
              />
              <p>{pokemon.name}</p>
            </li>
          ))}
    </ul>
  );
};
