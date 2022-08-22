import React from "react";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  return (
    <StyledExpensesList>
      <ExpensesItem />
    </StyledExpensesList>
  );
};
