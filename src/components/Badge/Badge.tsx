import React, { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

export const Badge = () => {
  const { currency } = useContext(CurrencyContext);

  return <StyledBadge>{currency}100</StyledBadge>;
};
