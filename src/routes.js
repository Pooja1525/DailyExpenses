import Home from "./Home";
import ExpenseAdd from "./components/ExpenseAdd";
import ExpensesList from "./components/ExpensesList";

export const routes = [
  {path: '/', component: Home},
  {path: '/update/:index', component: ExpenseAdd},
  {path: '/expenseslist', component: ExpensesList},
  {path: '/expenseadd', component: ExpenseAdd},
]
