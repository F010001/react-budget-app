import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { FormInput } from "../FormInput/FormInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput();

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <FormInput {...search} type="text" placeholder="search ..." />
      <ExpensesList />
    </StyledExpenses>
  );
};
