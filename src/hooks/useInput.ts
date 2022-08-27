import { ChangeEvent, useCallback, useContext, useState } from "react";
import { ExpensesContext } from "../contexts/ExpensesContext/ExpensesContext";

export const useInput = (initialState: string = "") => {
  const [value, setValue] = useState<string>(initialState);
  const { searchExpenses } = useContext(ExpensesContext);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value);
  }, []);

  return {
    value,
    onChange,
  };
};
