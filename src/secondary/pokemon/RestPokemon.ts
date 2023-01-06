import { AxiosInstance, AxiosResponse } from 'axios';

import { RestPokemon } from '../../domain/Pokemon';

export default class RestPokemonRepository implements RestPokemon {
  private axiosInstance: AxiosInstance;
  private baseURL: string;
  constructor(axiosInstance: AxiosInstance) {
    this.axiosInstance = axiosInstance;
    this.baseURL = 'pokemon?limit=20&offset=0';
  }

  async getPokemons(): Promise<any> {
    return this.axiosInstance
      .get(this.baseURL)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }
  async getPokemon(pokemon: string): Promise<any> {
    return this.axiosInstance
      .get('pokemon/' + pokemon)
      .then((response: AxiosResponse<any>) => response.data)
      .catch(error => {
        throw new Error(error.message);
      });
  }
}
