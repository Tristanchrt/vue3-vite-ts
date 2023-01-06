import { ref, reactive, defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  props: {},
  setup: () => {
    const readersNumber = ref(1);
    const value: string = 'salut';
    const book = reactive({ title: 'Vue 3 Guide' });
    return { book, readersNumber, value };
  },
});
