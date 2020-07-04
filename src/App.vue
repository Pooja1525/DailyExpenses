<template>
  <div class="container">
    <h1 style="text-align: center">Records Of Expenses</h1>
    <hr>
    <app-header></app-header>
    <div class="row">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import Header from "./Header";
  export default {
      components: {
        appHeader: Header
      },
    Headercreated() {
        this.$store.dispatch('addExpense');
    }
  }
</script>

<style>
</style>
