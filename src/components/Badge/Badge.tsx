import React, { useContext } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";
import { StyledBadge } from "./styles";

interface IProps {
  cost: number;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useContext(CurrencyContext);

  return (
    <StyledBadge>
      {currency}
      {cost}
    </StyledBadge>
  );
};
