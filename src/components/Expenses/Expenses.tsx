import { useContext, useEffect, useState } from "react";
import { Expenses } from "../../contexts/ExpensesContext";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useInput } from "../../hooks/useInput";
import { ExpensesList } from "../ExpensesList/ExpensesList";
import { SearchInput } from "../SearchInput/SearchInput";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

export const ExpensesBlock = () => {
  const { expenses } = useContext(ExpensesContext);
  const [effectValues, setEffectValues] = useState<Expenses[]>(expenses);
  const search = useInput();
  const debounceValue = useDebounce(search.value, 2000);

  useEffect((): void => {
    debounceValue
      ? setEffectValues(
          expenses.filter((expense) =>
            expense.name.toLowerCase().includes(debounceValue.toLowerCase())
          )
        )
      : setEffectValues(expenses);
  }, [debounceValue, expenses]);

  return (
    <StyledExpenses>
      <Title>Expenses</Title>
      <SearchInput {...search} />
      <ExpensesList expenses={effectValues} />
    </StyledExpenses>
  );
};
