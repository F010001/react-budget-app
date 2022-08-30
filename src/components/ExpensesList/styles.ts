import styled from "styled-components";

export const StyledExpensesList = styled.ul<{ $isExpensesLength: boolean }>`
  padding: 0;
  width: 100%;
  overflow: ${({ $isExpensesLength }) =>
    $isExpensesLength ? "scroll" : "hidden"};
  overflow-x: hidden;
`;

export const InputMessage = styled.div`
  margin: 0 138px;
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

export const SearchMessage = styled.p`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  margin-left: 120px;
`;
