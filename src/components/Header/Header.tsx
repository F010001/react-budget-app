import React from "react";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Title>Budget App</Title>
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
