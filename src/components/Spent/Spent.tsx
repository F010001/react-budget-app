import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { StyledSpent } from "./styles";

export const Spent = () => {
  const { budget } = useContext(BudgetContext);

  return <StyledSpent>Spent so far: {budget} </StyledSpent>;
};
