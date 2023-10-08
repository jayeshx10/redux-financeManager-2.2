import React from "react";

import { useSelector } from "react-redux";

const FinanceSummary = () => {
  const { income, expense } = useSelector((state) => state);
  return (
    <div className="finance-summary">
      <h1>Finance Summary</h1>
      <p>Income: ₹{income}</p>
      <p>Expense: ₹{expense}</p>
      <p>Balance: ₹{income - expense}</p>
    </div>
  );
};

export default FinanceSummary;
