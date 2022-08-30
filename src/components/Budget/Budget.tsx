import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Button, Input } from "./styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  const inputBudget = useInput();
  const [isToggleMode, setIsToggleMode] = useToggle(true);
  const { budget, setBudget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);

  const handleEditClick = () => {
    setIsToggleMode();
  };

  const handleSaveClick = () => {
    setBudget(+inputBudget.value);
    setIsToggleMode();
  };

  return (
    <StyledBudget>
      {isToggleMode ? (
        `Budget: ${currency}${budget}`
      ) : (
        <Input {...inputBudget} type="number" placeholder="Enter  budget ..." />
      )}

      {isToggleMode ? (
        <Button onClick={handleEditClick}>Edit</Button>
      ) : (
        <Button onClick={handleSaveClick}>Save</Button>
      )}
    </StyledBudget>
  );
};
