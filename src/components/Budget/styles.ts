import styled from "styled-components";
import { Color } from "../../ui/Colors";

export const StyledBudget = styled.div`
  width: 100%;
  height: 100px;
  border-radius: 10px;
  background-color: ${Color.Blue};
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  padding: 36px 0 40px 20px;
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
  margin-left: 65px;
  border: none;
`;
