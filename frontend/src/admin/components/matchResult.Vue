<template lang="pug">
.result(
  :class="{identical:indexX===indexY}"
  @click="$emit('matchResultOnOff'), $emit('sendIndexes', indexX, indexY)"
)
  h4 {{ indexX+1 }} {{ indexY+1 }}  
</template>

<script>
export default {
  props: ["indexX", "indexY"],
  data() {
    return {
    }
  },
};
</script>

<style lang="pcss" scoped>
  .result {
    height: 80%;
  }

  .identical {
    background-color: #f00;
  }
</style>