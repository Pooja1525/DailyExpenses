const state = {
  expenses: [
    {id: 1, name: 'Rice', amount: '2500', date: '25/01/2019 00:00'},
    {id: 2, name: 'Water', amount: '3500', date: '05/09/2018 00:00'},
    {id: 3, name: 'Soap', amount: '5500', date: '15/06/2017 00:00'},
    {id: 4, name: 'Soup', amount: '6500', date: '1/07/2020 00:00'},
    {id: 5, name: 'Shampoo', amount: '6500', date: '20/06/2020 00:00'},
    {id: 6, name: 'Oil', amount: '6500', date: '03/07/2020 10:45'},
    {id: 7, name: 'Potato', amount: '240', date: '03/07/2020 10:45'},
    {id: 8, name: 'Fruits', amount: '750', date: '03/07/2020 10:45'}
  ]
};

const mutations = {
  'ADD_EXPENSES' (state, trans) {
    const record = state.expenses.push(trans);
  },

  'UPDATE_EXPENSE' (state, trans) {
    const index = state.expenses.findIndex(
      item => item.id === trans.id
    )
    state.expenses[index] = trans
  }
};

const actions = {
  addExpense: ({commit}, trans) => {
    trans['id'] = Math.ceil(Math.random()*100)
    commit('ADD_EXPENSES', trans);
  },

  update: ({commit}, trans) => {
    commit('UPDATE_EXPENSE', trans);
  }
};

const getters = {
  expenses: (state) => (search) =>{
    if(search === -1) {
      return state.expenses
    }
    return state.expenses.filter(
      item => toMillisecond(item.date) >= (toMillisecond(search))
    )
  },

  getExpenseDetail: (state) => (index) => {
    if(state.expenses.length >= index){
      return state.expenses[index]
    }

  }
};

export default {
  state,
  mutations,
  actions,
  getters
};

const toMillisecond = date => {
  const changedDate = date.replace(/(..)\/(..)\/(....) (..):(..)/, '$3-$2-$1 $4:$5')
  date = new Date(changedDate)
  return date.getTime()
}
