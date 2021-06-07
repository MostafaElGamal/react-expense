import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesListContent;

  if (props.expenses.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  expensesListContent = props.expenses.map((expense) => {
    return (
      <li key={`expense_${expense.id}`}>
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={new Date(expense.date)}
        />
      </li>
    );
  });

  return <ul className="expenses-list">{expensesListContent}</ul>;
};
export default ExpensesList;
