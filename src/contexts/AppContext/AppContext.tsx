import { createContext, FC, ReactNode, useState } from "react";

interface IAppContext {
  name: string;
  cost: number;
  setExpense: (name: string, cost: number) => void;
}

export const AppContext = createContext({} as IAppContext);

const useAppContext = () => {
  const [expenseValue, setExpenseValue] = useState<IAppContext>({
    name: "",
    cost: 0,
    setExpense: (newName, newCost) =>
      setExpenseValue((ctx) => ({ ...ctx, name: newName, cost: newCost })),
  });

  return expenseValue;
};

export const AppContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <AppContext.Provider value={useAppContext()}>
      {children}
    </AppContext.Provider>
  );
};
