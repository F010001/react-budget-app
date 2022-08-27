import React from "react";
import { Badge } from "../Badge/Badge";
import { DeleteButton, StyledExpensesItem } from "./styles";

interface IProps {
  name: string;
  cost: string;
}

export const ExpensesItem = ({ name, cost }: IProps) => {
  return (
    <StyledExpensesItem>
      {name} <Badge cost={cost} /> <DeleteButton></DeleteButton>
    </StyledExpensesItem>
  );
};
