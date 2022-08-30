import ReactDOM from "react-dom/client";
import { GlobalStyles } from "./ui/GlobalStyles";
import { App } from "./App";
import { BudgetContextProvider } from "./contexts/BudgetContext/BudgetContext";
import { ExpensesContextProvider } from "./contexts/ExpensesContext/ExpensesContext";
import { CurrencyContextProvider } from "./contexts/CurrencyContext/CurrencyContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <CurrencyContextProvider>
      <BudgetContextProvider>
        <ExpensesContextProvider>
          <GlobalStyles />
          <App />
        </ExpensesContextProvider>
      </BudgetContextProvider>
    </CurrencyContextProvider>
  </>
);
