import { createContext, FC, ReactNode, useState } from "react";

type InputValues = {
  name: string;
  cost: number;
};

interface IExpensesContext {
  data: any;
  setData: (obj: InputValues) => void;
}

export const ExpensesContext = createContext({} as IExpensesContext);

const useExpensesContext = () => {
  const [expenseValue, setExpenseValue] = useState<IExpensesContext>({
    data: [],
    setData: (newObj: InputValues) => {
      setExpenseValue((ctx) => ctx);
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
