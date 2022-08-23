import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const StyledInput = styled.input`
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  border: none;
  background-color: ${Color.Blue};
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }
`;
