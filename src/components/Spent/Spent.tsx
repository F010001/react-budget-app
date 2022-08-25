import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { budget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);

  return (
    <StyledSpent>
      Spent so far: {currency}
      {budget}{" "}
    </StyledSpent>
  );
};
