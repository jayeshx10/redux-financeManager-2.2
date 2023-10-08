import "./styles.css";

import IncomeExpenseForm from "./IncomeExpenseForm";
import FinanceSummary from "./FinanceSummary";

export default function App() {
  return (
    <div className="App">
      <h1>Finance Manager</h1>
      <IncomeExpenseForm />
      <FinanceSummary />
    </div>
  );
}
