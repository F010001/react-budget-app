import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const StyledInput = styled.input`
  max-width: 153px;
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

  ::placeholder {
    font-family: Inter;
    font-size: 20px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0em;
    text-align: left;
    color: ${Color.White};
  }
`;
