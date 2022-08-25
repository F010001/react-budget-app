import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { budget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);

  const overspending = budget - 100 > 0;
  return (
    <StyledRemaining $overspending={overspending}>
      {overspending
        ? `Remaining: ${currency}${budget - 100} `
        : ` Overspending by: ${currency}${budget - 100}`}
    </StyledRemaining>
  );
};
