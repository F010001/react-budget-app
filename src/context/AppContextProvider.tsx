import { FC, ReactNode } from "react";
import { BudgetContextProvider } from "./BudgetContext/BudgetContext";
import { CurrencyContextProvider } from "./CurrencyContext/CurrencyContext";
import { ExpensesContextProvider } from "./ExpensesContext/ExpensesContext";

const providers = [
  ExpensesContextProvider,
  BudgetContextProvider,
  CurrencyContextProvider,
];
export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <>
      {providers.reduceRight((acc, Provider) => {
        return <Provider>{acc}</Provider>;
      }, children)}
    </>
  );
};
