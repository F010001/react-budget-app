import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { StyledRemaining } from "./styles";

export const Remaining = () => {
  const { budget } = useContext(BudgetContext);
  return (
    <StyledRemaining budget={budget}>
      {budget - 100 > 0
        ? `Remaining: ${budget}`
        : ` Overspending by: ${budget - 100}`}
    </StyledRemaining>
  );
};
