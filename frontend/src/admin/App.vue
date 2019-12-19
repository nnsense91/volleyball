<template lang="pug">
  .maincontent
    enterResult(
      v-if="resultIsClicked"
      @matchResultOnOff="enterResultOnOff()"
      :currentIndexX="currentIndexX"
      :currentIndexY="currentIndexY"
      )
    .championship
      table.championship__table
        thead.championship__head
          td.championship__head-cell.championship__head-team Команда
          td.championship__head-cell.championship__head-number №
          td.championship__head-cell(
            v-for="(team, index) in ALLTEAMS"
          ) {{ index+1 }}
        tbody.championship__table-body
          tr.championship__table-rows(
            v-for="(team, indexX) in ALLTEAMS"
          )
            td {{ team.name }}
            td {{ indexX+1 }}
            td.championship__table-results(
              v-for="(team, indexY) in ALLTEAMS"
              )
              matchResult(
                :indexX="indexX"
                :indexY="indexY"
                @matchResultOnOff="enterResultOnOff()"
                @sendIndexes="changeCurrentIndexes(indexX+1, indexY+1)"
              )
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    matchResult: () => import("./components/matchResult"),
    enterResult: () => import("./components/enterResult")
  },
  data() {
    return {
      resultIsClicked: false,
      currentIndexX: null,
      currentIndexY: null,
    };
  },
  mounted() {
    this.fetchTeams();
  },
  computed: mapGetters(["ALLTEAMS"]),
  methods: {
    enterResultOnOff: function() {
      return this.resultIsClicked=!this.resultIsClicked;  
    },
    changeCurrentIndexes: function(x, y) {
      this.currentIndexX = x;
      this.currentIndexY = y; 
    },
    ...mapActions(["fetchTeams"])
  }
};
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