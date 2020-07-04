<template>
  <div class="all">
    <div v-for="(expense, index) in getExpenses" @click="detail(index)">
    <app-expenses>
      <div v-for="(v,k) in expense">{{k}} : {{v}}</div>
    </app-expenses>
    </div>
  </div>
</template>

<script>
  import Expenses from "./components/Expenses";

  export default {
    methods: {
      detail(index) {
        this.$router.push({path:`update/${index}`})
      }
    },
    computed: {
      getExpenses() {
        return this.$store.getters.expenses(-1);
      }
    },
    components: {
      appExpenses: Expenses
    }
  }
</script>

<style scoped>
.all {
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
}
</style>
