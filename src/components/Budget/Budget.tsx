import React, { useContext, useState } from "react";
import { BudgetContext } from "../../contexts/BudgetContext/BudgetContext";
import { useInput } from "../../hooks/useInput";
import { Input } from "../Input/Input";
import { EditButton } from "./styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  const inputBudget = useInput();
  const { budget, setBudget } = useContext(BudgetContext);

  const [renderValue, setRenderValue] = useState<boolean>(false);

  const handleValue = () => {
    setBudget(+inputBudget.value);
    setRenderValue(!renderValue);
  };

  return (
    <StyledBudget>
      {renderValue ? (
        <Input {...inputBudget} type="number" placeholder="Enter  budget ..." />
      ) : (
        `Budget: ${budget}`
      )}
      <EditButton onClick={handleValue}>
        {!renderValue ? "Edit" : "Save"}
      </EditButton>
    </StyledBudget>
  );
};
