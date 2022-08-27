import React, { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useContext(CurrencyContext);
  const { expenses } = useContext(ExpensesContext);

  const total = expenses
    .map(({ cost }: Expenses) => cost)
    .reduce((acc: number, cost) => acc + +cost, 0);

  return (
    <StyledSpent>
      Spent so far: {currency}
      {total}
    </StyledSpent>
  );
};
