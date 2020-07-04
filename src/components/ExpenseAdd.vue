<template>
  <div class="row">
    <form>
      <h2>{{action[mode]}} Expenses</h2>
      <div class="col-sm-8 col-sm-offset-2 col-xs-12 col-ms-6 col-md-offset-3" form-group>
        <label>Name</label>
            <input type="text" v-model="userExp.name"><br>
        <label>Amount</label>
            <input type="number" v-model="userExp.amount">
        <label> Date</label>
           <input type="date" v-model="userExp.date">
        <button class="btn btn-primary" v-if="mode===0" @click.prevent="createNew">Add</button>
        <button class="btn btn-primary" v-if="mode===1" @click.prevent="update">Update</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        userExp: {
          name: '',
          amount: ['', Number],
          date: ['', Date],
          id:['',Number]
        },
        mode: 1,
        action: ['Add', 'Update'],
        index: -1
      };
    },

    created() {
      this.index = this.$route.params.index
      if(this.index !== -1){
        const info = this.$store.getters.getExpenseDetail(this.index)
        this.userExp.name = info.name
        this.userExp.amount = info.amount
        this.userExp.date = info.date
        this.userExp.id = info.id
      }
    },
    methods: {
      createNew() {
        const trans ={
          expName: this.userExp.name,
          epxAmount: this.userExp.amount,
          date:this.userExp.date
        };
        this.$store.dispatch('addExpense', trans);
        this.userExp.name = '';
        this.userExp.amount = '';
        this.userExp.date = '';
      },

      update() {
        const trans ={
          expName: this.userExp.name,
          epxAmount: this.userExp.amount,
          date:this.userExp.date,
          id:this.userExp.id
        };
        this.$store.dispatch('update', trans);
        this.userExp.name = '';
        this.userExp.amount = '';
        this.userExp.date = '';
        this.userExp.id = '';
      }
    }
  }
</script>

<style scoped>
  input, select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  .row{
    border-radius: 5px;
    background-color: #f2f2f2;
    padding-left: 40px;
    padding-top: 10px;
    /*width: 50%;*/
    margin-left: 250px;
    height: 500px;
    margin-top: 190px;
  }
</style>
