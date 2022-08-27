import React, { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses } = useContext(ExpensesContext);
  return (
    <StyledExpensesList>
      {expenses.map(({ name, cost }: any) => {
        return <ExpensesItem name={name} cost={cost} />;
      })}
    </StyledExpensesList>
  );
};
