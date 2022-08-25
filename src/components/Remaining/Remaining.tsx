import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { budget } = useContext(BudgetContext);

  const overspending = budget - 100 > 0;
  return (
    <StyledRemaining $overspending={overspending}>
      {overspending
        ? `Remaining: ${budget - 100} `
        : ` Overspending by: ${budget - 100}`}
    </StyledRemaining>
  );
};
