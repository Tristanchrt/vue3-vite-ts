<template>
  <div class="HomePage">
    <Menu />
    <Pokemon />
    <button class="btn-blue" @click="increase">Press me</button>
    <div>
      {{ counter }}
    </div>
    <HelloWorld msg="Welcomefgfgfgfddf to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { key } from '../../../secondary/store/store';
import HelloWorld from '../../components/HelloWorld.vue';
import Menu from '../../components/menu/Menu.vue';
import Pokemon from '../../components/pokemon/Pokemon.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    HelloWorld,
    Menu,
    Pokemon,
  },
  props: {},
  setup: () => {
    const count = ref(0);
    const store = useStore(key);
    const increase = () => store.dispatch('increment');
    const counter = computed(() => store.state.count);
    watch(counter, (newValue, oldValue) => {
      console.log('New value : ' + newValue + ' Old value : ' + oldValue);
    });
    return { count, increase, counter };
  },
});
</script>

<style scoped>
.btn-blue {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded;
}
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
