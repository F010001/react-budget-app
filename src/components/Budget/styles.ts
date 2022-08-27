import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const StyledBudget = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: ${Color.Blue};
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  margin-bottom: 20px;
  padding: 0 20px;
`;

export const EditButton = styled.button`
  border-radius: 10px;
  padding: 10px 30px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0em;
  text-align: left;
  border: none;
  width: 85px;
`;

export const Input = styled.input`
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
