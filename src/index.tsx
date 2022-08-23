import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider } from "./contexts/BudgetContext/BudgetContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <BudgetContextProvider>
      <GlobalStyles />
      <App />
    </BudgetContextProvider>
  </>
);
