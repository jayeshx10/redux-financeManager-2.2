const addIncome = (amount) => {
  return {
    type: "addIncome",
    payload: amount
  };
};

const addExpense = (amount) => {
  return {
    type: "addExpense",
    payload: amount
  };
};

export { addIncome, addExpense };
