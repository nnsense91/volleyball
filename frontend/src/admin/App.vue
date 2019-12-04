<template lang="pug">
  .maincontent
    table
      tr
        td Команда
        td №
        td(
          v-for="(team, index) in teams"
          ) {{ index+1 }}
      tr(
        v-for="(team, index) in teams"
      )
        td {{ team.name }}
        td {{ index+1 }}
</template>

<script>
export default {
  data() {
    return {
      teams: [
        {
        "id": "1",
        "score": "7",
        "position": "0",
        "name": "КОНАР",
        },
        {
          "id": "2",
          "position": "0",
          "score": "5",
          "name": "ИНТЕРСВЯЗЬ",
        },
        {
          "id": "3",
          "position": "0",
          "score": "10",
          "name": "Уральская Кузница",
        },
        {
          "id": "4",
          "position": "0",
          "score": "6",
          "name": "ЮУрГУ",
        },        
      ]
    };
  },
  created: {
  },
}
</script>