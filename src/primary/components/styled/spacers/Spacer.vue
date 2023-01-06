<script>
import { defineComponent, inject, provide, reactive, toRefs, computed, h } from 'vue';

export default defineComponent({
  props: {
    level: {
      default: 8,
    },
  },
  setup({ level }) {
    const state = reactive({
      spacersValue: {},
    });
    state.spacersValue = {
      8: 8,
      16: 16,
      24: 24,
      32: 32,
      48: 48,
      64: 64,
    };
    return () => h('div', { style: `margin: ${state.spacersValue[level]}px` }, '');
  },
});
</script>

<style scoped></style>
