<template>
  <div>
    <router-link to="/" tag="div" active-class="active" exact><a>Home</a></router-link>
    <router-link to="/expenseslist" tag="div" active-class="active"><a>Expenses List</a></router-link>
    <router-link to="/expenseadd" tag="div" active-class="active"><a>Expenses Add</a></router-link>
  </div>
</template>


<style scoped>
div{
  display: flex;
  justify-content: space-between;
}
</style>
