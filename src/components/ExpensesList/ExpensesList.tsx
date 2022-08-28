import { useContext } from "react";
import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { StyledExpensesList } from "./styles";

interface IProps {
  searchWord: string;
}

export const ExpensesList = ({ searchWord }: IProps) => {
  const { expenses } = useContext(ExpensesContext);
  const expensesLength = expenses.length >= 3;

  return (
    <StyledExpensesList $expensesLength={expensesLength}>
      {expenses
        .filter((expense) => expense.name.includes(searchWord))
        .map(({ name, cost, id }: Expenses) => {
          return <ExpensesItem name={name} cost={cost} id={id} />;
        })}
    </StyledExpensesList>
  );
};
