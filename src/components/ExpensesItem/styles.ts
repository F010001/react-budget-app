import styled from "styled-components";
import close from "../../assets/icons/close.svg";
import { Color } from "../../ui/Colors";

export const StyledExpensesItem = styled.li`
  display: grid;
  grid-template-columns: 70% 15% 15%;
  padding: 15px 20px;
  align-items: center;
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  color: ${Color.Black};
`;

export const DeleteButton = styled.button`
  justify-self: end;
  background: no-repeat url(${close});
  width: 17px;
  height: 17px;
  border: none;
`;
