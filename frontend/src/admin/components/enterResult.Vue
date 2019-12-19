<template lang="pug">
.overlay
  .result
    h3 Введите результаты матча между командой {{ currentIndexX }} и командой {{ currentIndexY }}
      form
        button(          
          @click.prevent="$emit('matchResultOnOff')"
        ) Отмена
        button(
          type="submit"
          @click.prevent
      ) Отправить
</template>

<script>
export default {
  props: {
    currentIndexX: Number,
    currentIndexY: Number,
  },
  methods: {    

  }
}
</script>

<style lang="pcss" scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.8);    
  }
  .result {
    display: flex;
    width: 30%;
    height: 50vh;
    background-color: #cfc;
    position: fixed;
    left: 35%;
    top: 25%;
    justify-content: center;    
  }
</style>