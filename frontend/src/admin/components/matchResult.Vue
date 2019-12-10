<template lang="pug">
h4 {{ indexX+1 }} {{ indexY+1 }}
</template>

<script>
export default {
  props: ["indexX", "indexY"]
};
</script>