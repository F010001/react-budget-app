import React from "react";
import { EditButton } from "./styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      Budget: $3000 <EditButton>Edit</EditButton>
    </StyledBudget>
  );
};
