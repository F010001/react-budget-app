import { ComponentProps, FC } from "react";
import { BudgetContextProvider } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "../../contexts/CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "../../contexts/ExpensesContext/ExpensesContext";

const providers = {
  BudgetContextProvider,
  CurrencyContextProvider,
  ExpensesContextProvider,
};

// export const combineComponents = (...components: FC[]): FC => {
//   return components.reduce(
//     (AccumulatedComponents, CurrentComponent) => {
//       return ({ children }: ComponentProps<FC>): JSX.Element => {
//         return (
//           <AccumulatedComponents>
//             <CurrentComponent>{children}</CurrentComponent>
//           </AccumulatedComponents>
//         );
//       };
//     },
//     ({ children }) => <>{children}</>,
//   );
// };

// export const AppContextProvider = combineComponents(...providers);
