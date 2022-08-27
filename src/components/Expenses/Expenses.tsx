import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();

  return (
    <StyledExpenses>
      <SearchInput onChange={search.onChange} />
      <Title>Expenses</Title>
      <ExpensesList />
    </StyledExpenses>
  );
};
