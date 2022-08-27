import styled from "styled-components";

export const StyledExpensesList = styled.ul<{ $expensesLength: boolean }>`
  padding: 0;
  width: 100%;
  overflow: ${({ $expensesLength }) => ($expensesLength ? "scroll" : "hidden")};
  overflow-x: hidden;
`;
