import { createContext, FC, ReactNode, useState } from "react";

type InputValues = {
  name: string;
  cost: number;
};

interface IAppContext {
  data: any;
  setData: (obj: InputValues) => void;
}

export const AppContext = createContext({} as IAppContext);

const useAppContext = () => {
  const [expenseValue, setExpenseValue] = useState<IAppContext>({
    data: [],
    setData: (newObj: InputValues) => {
      setExpenseValue((ctx) => ctx.data.push(newObj));
    },
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
