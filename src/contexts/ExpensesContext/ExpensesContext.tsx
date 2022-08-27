import { createContext, FC, ReactNode, useState } from "react";
import { IExpensesContext, Expenses } from ".";

export const ExpensesContext = createContext({} as IExpensesContext);

const useExpensesContext = () => {
  const [expenseValue, setExpenseValue] = useState<IExpensesContext>({
    expenses: [],
    searchExpenses: (word: string) => {
      setExpenseValue((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses].filter((expense) =>
          expense.name.includes(word)
        ),
      }));
    },
    deleteExpenses: (id: string) => {
      setExpenseValue((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses].filter((expense) => expense.id !== id),
      }));
    },
    setExpenses: (newExpenses: Expenses) => {
      setExpenseValue((ctx) => ({
        ...ctx,
        expenses: [...ctx.expenses, newExpenses],
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
