export interface RestPokemon {
  getPokemons(): Promise<any>;
  getPokemon(pokmeon: string): Promise<any>;
}
