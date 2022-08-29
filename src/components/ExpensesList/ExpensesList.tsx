import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { SearchMessage, StyledExpensesList } from "./styles";

interface IProps {
  expenses: Expenses[];
}

export const ExpensesList = ({ expenses }: IProps) => {
  const expensesLength = expenses.length >= 3;

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
