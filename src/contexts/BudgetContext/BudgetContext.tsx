import React, { createContext, FC, ReactNode, useState } from "react";

interface IBudgetContext {
  budget: number;
  setBudget: (budget: number) => void;
}

export const BudgetContext = createContext<IBudgetContext>(
  {} as IBudgetContext
);

const useContextBudgetValue = () => {
  const [budgetValue, setBudgetValue] = useState<IBudgetContext>({
    budget: 0,
    setBudget: (newBudget) => {
      setBudgetValue((ctx) => ({ ...ctx, budget: newBudget }));
    },
  });

  return budgetValue;
};

export const BudgetContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <BudgetContext.Provider value={useContextBudgetValue()}>
      {children}
    </BudgetContext.Provider>
  );
};
