<template>
  <div class="AnalyticsPage"><Message /></div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { key } from '../../../secondary/store/store';
import Message from '../../components/message/Message.vue';
export default defineComponent({
  name: 'Analytics',
  components: {
    Message,
  },
  props: {},
  setup: () => {
    return {};
  },
});
</script>

<style scoped></style>
