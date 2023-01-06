<template>
  <div class="messageBox">
    <div ref="boxChat" id="boxChat" class="boxChat">
      <p class="message right">bbkjbjkmgfjofdsldfijidfdkfglgflgflgflfgfgfg,kjdjndfjdl,f,lfdldfl,djfdjuuuuuuuuuufdkjkjdfk</p>
      <p :class="'message ' + test" v-for="test in listeTest" :key="test"></p>
    </div>
    <Spacer :level="16" />
    <button @click="generateMsg" class="generateMsg" type="button">GENERATE</button>
  </div>
</template>
<script lang="ts">
import { defineComponent, watch, ref, inject, provide, reactive, toRefs, computed } from 'vue';

import Spacer from '../styled/spacers/Spacer.vue';

export default defineComponent({
  components: {
    Spacer,
  },
  setup() {
    const boxChat: any = ref(null);
    const state = reactive({
      listeTest: ['left', 'right', 'left', 'right'],
    });

    watch(state.listeTest, () => {
      setTimeout(() => {
        scrollToElement();
      }, 1);
    });

    const scrollToElement = (): void => (boxChat.value!.scrollTop = boxChat.value!.scrollHeight);
    const generateMsg = (): void => {
      let class_liste = ['left', 'right'];
      let randomItem = class_liste[Math.floor(Math.random() * class_liste.length)];
      state.listeTest.push(randomItem);
    };
    return { generateMsg, boxChat, ...toRefs(state) };
  },
});
</script>

<style scoped>
.messageBox {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.generateMsg {
  background-color: blue;
  padding: 5px;
  border-radius: 5px;
  box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.2);
}
.boxChat {
  height: 20em;
  width: 25em;
  max-width: 25em;
  background-color: rgb(208, 208, 208);
  overflow: scroll;
  overflow-x: hidden;
}
.message {
  width: 10em;
  height: auto;
  min-height: 2em;
  max-width: 10em;
  border-radius: 3px;
  margin: 5px;
  padding: 2px;
  overflow: auto;
  display: flex;
  word-wrap: break-word;
  flex-direction: column;
}
.right {
  margin-left: auto;
  background-color: blue;
}
.left {
  margin-right: auto;
  background-color: green;
}
</style>
