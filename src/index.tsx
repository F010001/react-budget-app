import ReactDOM from "react-dom/client";
import { App } from "./App";
import { AppContextProvider } from "./contexts/AppContext/AppContext";
import { BudgetContextProvider } from "./contexts/BudgetContext/BudgetContext";
import { GlobalStyles } from "./ui/GlobalStyles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <AppContextProvider>
      <BudgetContextProvider>
        <GlobalStyles />
        <App />
      </BudgetContextProvider>
    </AppContextProvider>
  </>
);
