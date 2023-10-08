const initialState = {
  income: 0,
  expense: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addIncome":
      return {
        ...state,
        income: state.income + action.payload
      };
    case "addExpense":
      return {
        ...state,
        expense: state.expense + action.payload
      };
    default:
      return state;
  }
};

export default reducer;
