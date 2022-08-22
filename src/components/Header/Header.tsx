import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      Budget App
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
