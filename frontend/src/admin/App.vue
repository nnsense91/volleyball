<template lang="pug">
  .maincontent
    .championship
      table.championship__table
        thead.championship__head
          td.championship__head-cell.championship__head-team Команда
          td.championship__head-cell.championship__head-number №
          td.championship__head-cell(
            v-for="(team, index) in ALLTEAMS"
          ) {{ index=index+1 }}
        tbody.championship__table-body
          tr.championship__table-rows(
            v-for="(team, index) in ALLTEAMS"
          )
            td {{ team.name }}
            td {{ index=index+1 }}
            td.championship__table-results(
              v-for="team in ALLTEAMS"
              )

      
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    
  },
  mounted() {
    this.fetchTeams();
  },
  computed: mapGetters(["ALLTEAMS"]),
  methods: mapActions(["fetchTeams"]),
}
</script>

<style lang="pcss" scoped>
.maincontent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 20px;
  font-weight: bold;
}

.championship {
  width: 50%;
  height: 50%;
}

td {
  border: 1px solid black;
  height: 30px;
  text-align: center;
}

.championship__table {
  margin-top: 200px;
  width: 100%;
  border: 1px solid black;
}

.championship__head-cell {
  background: #888;
}

.championship__table-results {
  width: 40px;
}

</style>