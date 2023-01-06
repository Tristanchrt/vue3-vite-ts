<template>
  <div class="taildwinTest">
    <div class="p-1"></div>
    <div class="dark:bg-black dark:text-gray-400 max-w-sm mx-auto p-6 shadow-md flex m-5 bg-white rounded-lg">
      <div class="flex-shrink-0">
        <img
          alt="img1"
          class="h-12 w-12"
          src="https://image.shutterstock.com/image-vector/new-message-inbox-notification-vector-600w-1110759836.jpg"
        />
      </div>
      <div class="px-2"></div>
      <div>
        <div class="dark:text-white text-xl font-bold text-black text-left">Notification</div>
        <p class="dark:text-gray-300 text-gray-500 text-left">You have a new notification</p>
      </div>
    </div>
    <form class="max-w-sm mx-auto flex flex-col">
      <input
        placeholder="Enter your email"
        class="border focus:outline-none focus:ring-2 rounded-lg focus:ring-purple-600 focus:border-transparent shadow px-3 py-1"
      />
      <div class="p-2"></div>
      <button class="bg-purple-600 hover:bg-purple-700 p-2 rounded-lg shadow text-white px-4">Sign me up</button>
    </form>
    <div class="flex max-w-sm mx-auto my-10 justify-around">
      <div class="blcNumber">1</div>
      <div class="blcNumber">2</div>
      <div class="blcNumber">3</div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'TaildwinTest',
  props: {},
  setup: () => {},
});
</script>

<style lang="postcss" scoped>
/* <style scoped> */
.taildwinTest {
  @apply bg-indigo-200 h-screen dark:bg-indigo-700;
}
.blcNumber {
  @apply bg-indigo-500 flex items-center cursor-pointer justify-center font-extrabold text-2xl text-white rounded-lg w-16 h-16;
}
</style>
