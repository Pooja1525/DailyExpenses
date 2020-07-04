<template>
  <div class="row">
    <nav class="navbar navbar-light bg-light">
      <form class="form-inline">
        <select name="Search"  @change="getI">
          <option value=-1 >All</option>
          <option v-for="filter in filters" >{{filter.name}}</option>
        </select>
      </form>
    </nav>
    <div class="all">
    <app-expenses v-for="expense in getExpenses">
      <div v-for="(v,k) in expense">{{k}}: {{v}}</div>
    </app-expenses>
    </div>
  </div>
</template>

<script>
  import Expenses from "./Expenses";

  export default {
    data: function(){
      return {
        date: new Date(),
        search:-1,
        filters:[
          {name: "Today"},
          {name: "One week"},
          {name: "One month"},
        ]
      }
    },
    methods:{
      getI(event){
        const date = new Date()
        this.search = 0
        switch (event.target.value) {
          case "-1":
            this.search = -1
            break
          case "Today" :
            this.date = date
            this.date.setHours(0,0,0);
            break
          case "One week" :
            this.date = date
            this.date.setDate(date.getDate()-7)
            this.date.setHours(0,0,0);
            break
          case "One month" :
            this.date = date
            this.date.setMonth(date.getMonth()-1)
            this.date.setHours(0,0,0);
            break
        }
        this.search = this.search === -1 ? -1 : `${this.date.getDate()}/${this.date.getMonth()}/${this.date.getFullYear()} 00:00`
      },
    },computed: {
      getExpenses() {
        return this.$store.getters.expenses(this.search);
      }
    },
    components: {
      appExpenses: Expenses
    }
  }
</script>

<style scoped>
  .row{
    display: flex;
    flex-direction: column;
  }
  .all{
    display: grid;
    grid-template-columns: auto auto auto;
  }
</style>
