import React, { useContext } from "react";
import { CurrencyContext } from "../../context/CurrencyContext/CurrencyContext";
import { ExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { currency } = useContext(CurrencyContext);
  const { expenses } = useContext(ExpensesContext);

  const total = expenses.reduce((acc, { cost }) => acc + +cost, 0);

  return (
    <StyledSpent>
      Spent so far: {currency}
      {total}
    </StyledSpent>
  );
};
