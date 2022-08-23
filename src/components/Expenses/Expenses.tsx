import React from "react";
import { ExpensesList } from "../ExpensesList/ExpensesList";
// import { FormInput } from "../FormInput/FormInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      {/* <FormInput/> */}
      <ExpensesList />
    </StyledExpenses>
  );
};
