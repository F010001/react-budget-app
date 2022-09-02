import { createContext, FC, ReactNode, useState } from "react";
import { IExpensesContext, IExpense } from "./types";

export const ExpensesContext = createContext({} as IExpensesContext);

const useExpensesContext = () => {
  const [expenseValue, setExpenseValue] = useState<IExpensesContext>({
    expenses: [],

    setExpense: (newExpenses: IExpense) => {
      setExpenseValue((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpenses],
      }));
    },

    deleteExpense: (id: string) => {
      setExpenseValue((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses].filter((expense) => expense.id !== id),
      }));
    },
  });

  return expenseValue;
};

export const ExpensesContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <ExpensesContext.Provider value={useExpensesContext()}>
      {children}
    </ExpensesContext.Provider>
  );
};
