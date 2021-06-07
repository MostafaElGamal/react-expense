import { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: "2020, 7, 14",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: "2021, 2, 12" },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: "2021, 2, 28",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: "2021, 5, 12",
  },
];

const App = () => {
  const [expensesData, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpensesData) => [expense, ...prevExpensesData]);
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense addExpense={addExpenseHandler} />
      <Expenses items={expensesData} />
    </div>
  );
};

export default App;
