import { IExpense } from "../../context/ExpensesContext/types";
import { ExpensesItem } from "../ExpensesItem/ExpensesItem";
import { SearchMessage, StyledExpensesList } from "./styles";

interface IProps {
  searchExpenses: IExpense[];
}

export const ExpensesList = ({ searchExpenses }: IProps) => {
  const isExpensesLength = searchExpenses.length >= 3;

  return (
    <StyledExpensesList $isExpensesLength={isExpensesLength}>
      {searchExpenses.length === 0 ? (
        <SearchMessage>Oooops🙈</SearchMessage>
      ) : (
        searchExpenses.map(({ name, cost, id }: IExpense) => {
          return <ExpensesItem name={name} cost={cost} id={id} />;
        })
      )}
    </StyledExpensesList>
  );
};
