<template>
  <div class="designPage">
    <Spacer :level="32" />
    <div class="cardInfo">
      <div class="headerCard">
        <div class="dot"></div>
        <Spacer :level="8" />
        <div class="titleText">Gradph design</div>
      </div>
      <div class="numberCard">48,32 %</div>
      <hr class="lineCard" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref, watch, defineComponent, computed } from 'vue';
import { useStore } from 'vuex';

import { key } from '../../../secondary/store/store';
import Spacer from '../../components/styled/spacers/Spacer.vue';

export default defineComponent({
  name: 'Analytics',
  components: {
    Spacer,
  },
  props: {},
  setup: () => {
    return {};
  },
});
</script>

<style lang="scss">
$firstColor: red;
@mixin lineAnimation($name, $value) {
  @keyframes #{$name} {
    0% {
      border-top: 1px solid $firstColor;
      width: 0%;
    }
    100% {
      border-top: 2px solid yellow;
      width: $value;
    }
  }
}
.cardInfo {
  background: rgb(131, 58, 180);
  background: linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%);
  display: flex;
  flex-direction: column;
  padding: 1.4em;
  margin: 0 auto;
  border-radius: 24px;
  width: 15em;
  text-align: left;
  .headerCard {
    display: flex;
    align-items: baseline;
    .titleText {
      // margin-left: 10px;
      color: #d4d4d4;
    }
    .dot {
      height: 0.6em;
      width: 0.6em;
      background-color: #d843fc;
      border-radius: 50%;
    }
  }
  .numberCard {
    color: #fff;
    font-size: 2.4em;
  }
  .lineCard {
    animation-name: progress-bar;
    animation-duration: 4s;
    animation-fill-mode: forwards;
  }
}

@include lineAnimation(progress-bar, 50%);

// @keyframes progress {
//   from {
//     border-top: 1px solid $firstColor;
//     width: 0%;
//   }
//   to {
//     border-top: 2px solid yellow;
//     width: 100%;
//   }
// }
</style>
