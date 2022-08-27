import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { budget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);
  const { expenses } = useContext(ExpensesContext);

  const totalSpending = expenses.map((expense: any) => {
    return Object.values(expense)
      .filter((value) => typeof value === "number")
      .reduce((total: any, value: any) => total + value, 0);
  });

  const overspending = budget - 100 > 0;
  return (
    <StyledRemaining $overspending={overspending}>
      {overspending
        ? `Remaining: ${currency}${budget - 100} `
        : ` Overspending by: ${currency}${budget - 100}`}
    </StyledRemaining>
  );
};
