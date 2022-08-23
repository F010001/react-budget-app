import React from "react";
import { ExpensesList } from "../ExpensesList/ExpensesList";
// import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      {/* <Input {...searchValue} type="number" placeholder="search ..." /> */}
      <ExpensesList />
    </StyledExpenses>
  );
};
