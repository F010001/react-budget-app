import React, { useContext, useState } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { CustomSelect } from "../Select/Select";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { StyledHeader } from "./styles";

export const Header = () => {
  const [currency, setCurrency] = useState<any>();

  return (
    <StyledHeader>
      <Title>Budget App</Title>
      <CustomSelect currency={currency} setCurrency={setCurrency} />
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
