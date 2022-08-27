import React, { useContext } from "react";
import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

export const ExpensesList = () => {
  const { expenses } = useContext(ExpensesContext);

  const expensesLength = expenses.length >= 3;

  return (
    <StyledExpensesList $expensesLength={expensesLength}>
      {expenses.map(({ name, cost, id }: Expenses) => {
        return <ExpensesItem name={name} cost={cost} id={id} />;
      })}
    </StyledExpensesList>
  );
};
