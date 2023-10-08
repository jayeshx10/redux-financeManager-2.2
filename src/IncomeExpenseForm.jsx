import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { addIncome, addExpense } from "./actions";

const IncomeExpenseForm = () => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState();

  const inputHandler = (e) => setAmount(e.target.value);

  const handleAddIncome = () => {
    dispatch(addIncome(parseFloat(amount)));
    setAmount(0);
  };

  const handleAddExpense = () => {
    dispatch(addExpense(parseFloat(amount)));
    setAmount(0);
  };

  return (
    <div className="form">
      <input
        className="form__input"
        type="number"
        placeholder="0"
        value={amount}
        onChange={(e) => inputHandler(e)}
      />
      <button onClick={handleAddIncome}>Add Income</button>
      <button onClick={handleAddExpense}>Add Expense</button>
    </div>
  );
};

export default IncomeExpenseForm;
