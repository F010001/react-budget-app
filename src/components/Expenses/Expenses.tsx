import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchInput {...search} />
      <ExpensesList searchWord={search.value} />
    </StyledExpenses>
  );
};
