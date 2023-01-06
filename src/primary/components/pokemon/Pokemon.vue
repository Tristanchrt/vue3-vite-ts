<template>
  <div class="pokemonComp">
    TEST PRODUCTION
    <Spacer :level="8" />
    <input type="text" placeholder="Pokemon..." class="mt-10 p-2 border-gray-400" v-model="text" />
    <div class="pokemons">
      <div
        @click="openCard(pokemon)"
        class="ml-4 text-6x text-blue-500 cursor-pointer"
        v-for="pokemon in filteredPokemon"
        :key="pokemon.url"
      >
        {{ pokemon.name }}
      </div>
      <div v-if="pokemonInfo" class="cardPokemon">
        <h2 class="text-xl font-bold text-black">{{ pokemonInfo.title }}</h2>
        <img class="w-48" :src="pokemonInfo.front" alt="" />
        <img class="w-48" :src="pokemonInfo.back" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, provide, reactive, toRefs, computed } from 'vue';

import { RestPokemon } from '../../../domain/Pokemon';
import Spacer from '../styled/spacers/Spacer.vue';

export default defineComponent({
  name: 'Pokemon',
  props: {},
  components: {
    Spacer,
  },
  inject: ['pokemonApi'],
  setup() {
    // Variables
    const baseURL: string = 'https://pokeapi.co/api/v2/pokemon/';
    // Functions

    const state = reactive({
      pokemons: [],
      pokemonInfo: {} as any,
      text: '',
      filteredPokemon: computed(() => updatePokemon()),
    });

    const updatePokemon = (): any => {
      return state.text ? state.pokemons.filter((pokemon: any) => pokemon.name.includes(state.text)) : [];
    };

    const openCard = (pokemon: any) => {
      pokemonApi!.getPokemon(pokemon.url).then((data): any => {
        state.pokemonInfo = data;
        state.pokemonInfo['title'] = pokemon.name;
        state.pokemonInfo['front'] = data.sprites.front_default;
        state.pokemonInfo['back'] = data.sprites.back_default;
      });
      console.log(state.pokemonInfo);
    };

    const pokemonApi: RestPokemon | undefined = inject('pokemonApi');

    pokemonApi!.getPokemons().then((data): any => {
      state.pokemons = data.results.map((data: any) => {
        let name = data.name;
        let url = data.url.replace(baseURL, '');
        return { name, url };
      });
    });

    return { ...toRefs(state), openCard };
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemons {
  @apply mt-8 p-4 flex flex-wrap justify-center;
}
.cardPokemon {
  @apply flex table-column;
}
</style>
