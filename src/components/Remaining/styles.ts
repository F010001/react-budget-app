import styled from "styled-components";
import { Color } from "../../ui/Colors";

type Props = {
  budget: number;
};

export const StyledRemaining = styled.div<Props>`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) =>
    props.budget - 100 > 0 ? Color.Teal : Color.Red};
  font-family: Inter;
  font-size: 20px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 20px;
  padding: 0 20px;
`;
