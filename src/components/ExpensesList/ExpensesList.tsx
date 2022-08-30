import { useContext } from "react";
import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { SearchMessage, StyledExpensesList } from "./styles";

interface IProps {
  searchExpenses: Expenses[];
}

export const ExpensesList = ({ searchExpenses }: IProps) => {
  const expensesLength = searchExpenses.length >= 3;
  const { expenses } = useContext(ExpensesContext);

  return (
    <StyledExpensesList $expensesLength={expensesLength}>
      {expenses.length === 0 ? (
        <SearchMessage>Oooops🙈</SearchMessage>
      ) : (
        expenses.map(({ name, cost, id }: Expenses) => {
          return <ExpensesItem name={name} cost={cost} id={id} />;
        })
      )}
    </StyledExpensesList>
  );
};
