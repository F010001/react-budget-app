import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const Input = styled.input`
  max-width: 100%;
  height: 50px;
  padding: 15px 20px;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  border: none;
  :active,
  :hover,
  :focus {
    outline: 0;
    outline-offset: 0;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-bottom: 20px;

  &::placeholder {
    color: ${Color.Grey};
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
`;
