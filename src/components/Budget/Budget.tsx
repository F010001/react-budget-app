import React from "react";
import { EditButton } from "../Header/styles";
import { StyledBudget } from "./styles";

export const Budget = () => {
  return (
    <StyledBudget>
      Budget: <EditButton>Edit</EditButton>
    </StyledBudget>
  );
};
