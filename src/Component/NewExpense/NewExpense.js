import { useState } from "react";
import "./NewExpense.scss";

function NewExpense() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHander(event) {
    setEnteredDate(event.target.value);
  }

  function AddNewExpense(event) {
    event.preventDefault();
    const expenseDate = {
      Title: enteredTitle,
      Amount: enteredAmount,
      Date: new Date(enteredDate),
    };
    console.log(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <form onSubmit={AddNewExpense}>
      <div className="NewExpenses">
        <div className="ExpenseItem">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="ExpenseItem">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="ExpenseItem">
          <label>Date</label>
          <input
            type="Date"
            min="2019-01-01"
            max="2022-06-16"
            onChange={dateChangeHander}
            value={enteredDate}
          />
        </div>
        <button type="submit">Add NewExpense</button>
      </div>
    </form>
  );
}

export default NewExpense;
