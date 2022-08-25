import React, { useContext } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { useToggle } from "../../hooks/useToggle";
import { Input } from "../Input/Input";
import { EditButton } from "./styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  const inputBudget = useInput();
  const [isOpen, setIsOpen] = useToggle();
  const { budget, setBudget } = useContext(BudgetContext);

  const handleValue = () => {
    setBudget(+inputBudget.value);
    setIsOpen();
  };

  return (
    <StyledBudget>
      {isOpen ? (
        <Input {...inputBudget} type="number" placeholder="Enter  budget ..." />
      ) : (
        `Budget: ${budget}`
      )}
      <EditButton onClick={handleValue}>{isOpen ? "Save" : "Edit"}</EditButton>
    </StyledBudget>
  );
};
