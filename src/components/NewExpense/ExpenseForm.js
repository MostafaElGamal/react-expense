import { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseData, setExpenseData] = useState({});

  const expanseDataChangeHandler = (event) => {
    const value = event.target.value;
    const inputName = event.target.name;

    setExpenseData((prevExpanseData) => {
      const newExpenseData = { ...prevExpanseData };
      newExpenseData[inputName] = value;
      return newExpenseData;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onSaveExpenseData(expenseData);
    setExpenseData({});
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={expenseData.title || ""}
            onChange={expanseDataChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="0.01"
            step="0.01"
            value={expenseData.amount || ""}
            onChange={expanseDataChangeHandler}
            required
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            name="date"
            id="date"
            min="2019-01-01"
            max="2022-12-31"
            value={expenseData.date || ""}
            onChange={expanseDataChangeHandler}
            required
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
