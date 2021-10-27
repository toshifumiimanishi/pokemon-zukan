import { PokemonsGotten } from '../../../types';

export type Methods = {
  get: {
    query?: {
      offset: number
      limit: number
    }
    resBody: PokemonsGotten;
  };
};
