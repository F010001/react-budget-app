import { createContext, FC, ReactNode, useState } from "react";

interface IInfo {
  newObj: any;
}

interface IAppContext {
  data: IInfo[];
  setExpense: (name: string, cost: number, id: number) => void;
}

export const AppContext = createContext({} as IAppContext);

const useAppContext = () => {
  const [expenseValue, setExpenseValue] = useState<IAppContext>({
    data: [],
    setExpense: (newObj) =>
      setExpenseValue((ctx) => ({
        ...ctx,
        newObj,
      })),
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
