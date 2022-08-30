import { useContext, useEffect, useState } from "react";
import { IExpense } from "../../contexts/ExpensesContext/types";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const ExpensesBlock = () => {
  const { expenses } = useContext(ExpensesContext);
  const [filteredExpenses, setFilteredExpenses] =
    useState<IExpense[]>(expenses);
  const search = useInput();
  const debounceValue = useDebounce(search.value, 1000);

  useEffect((): void => {
    debounceValue
      ? setFilteredExpenses(
          expenses.filter((expense) =>
            expense.name.toLowerCase().includes(debounceValue.toLowerCase())
          )
        )
      : setFilteredExpenses(expenses);
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchInput {...search} />
      <ExpensesList searchExpenses={filteredExpenses} />
    </StyledExpenses>
  );
};
