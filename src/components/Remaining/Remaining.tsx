import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { budget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);
  const { expenses } = useContext(ExpensesContext);

  const total = expenses
    .map(({ cost }) => cost)
    .reduce((acc: number, cost: number) => acc + +cost, 0);

  const overspending = +budget - total >= 0;
  return (
    <StyledRemaining $overspending={overspending}>
      {overspending
        ? `Remaining: ${currency}${
            total === 0 ? 0 : Math.abs(+budget - total)
          } `
        : ` Overspending by: ${currency}${Math.abs(+budget - total)}`}
    </StyledRemaining>
  );
};
