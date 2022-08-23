import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 148px;
  background: ${Color.DarkBlue};
  border-radius: 10px;
  border: none;
  color: ${Color.White};

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;
