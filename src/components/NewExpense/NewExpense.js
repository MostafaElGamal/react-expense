import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpoense = (props) => {
  const onSaveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    props.addExpense(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHanlder} />
    </div>
  );
};

export default NewExpoense;
