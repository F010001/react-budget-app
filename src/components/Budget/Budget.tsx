import React, { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Input, SaveButton } from "./styles";
import { EditButton } from "./styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  const inputBudget = useInput();
  const [value, setValue] = useState<any>();
  const [isEditMode, setIsEditMode] = useToggle(true);
  const { budget, setBudget } = useContext(BudgetContext);
  const { currency } = useContext(CurrencyContext);

  const handleEditClick = () => {
    setIsEditMode();
  };

  const handleSaveClick = () => {
    setBudget(+inputBudget.value);
    setValue("");
    setIsEditMode();
  };

  return (
    <StyledBudget>
      {isEditMode ? (
        `Budget: ${currency}${budget}`
      ) : (
        <Input
          onChange={inputBudget.onChange}
          value={value}
          type="number"
          placeholder="Enter  budget ..."
        />
      )}

      {isEditMode ? (
        <EditButton onClick={handleEditClick}>Edit</EditButton>
      ) : (
        <SaveButton onClick={handleSaveClick}>Save</SaveButton>
      )}
    </StyledBudget>
  );
};
