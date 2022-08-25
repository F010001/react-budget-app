import React from "react";
import { Badge } from "../Badge/Badge";
import { DeleteButton, StyledExpensesItem } from "./styles";

export const ExpensesItem = () => {
  return (
    <StyledExpensesItem>
      shoping <Badge /> <DeleteButton></DeleteButton>
    </StyledExpensesItem>
  );
};
