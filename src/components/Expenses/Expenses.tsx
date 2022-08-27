import { ExpensesList } from "../ExpensesList/ExpensesList";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  return (
    <StyledExpenses>
      <SearchInput />
      <Title>Expenses</Title>
      <ExpensesList />
    </StyledExpenses>
  );
};
