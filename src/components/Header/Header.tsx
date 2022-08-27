import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { CustomSelect } from "../Select/Select";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderFrame, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderFrame>
        <Title>Budget App</Title>
        <CustomSelect />
      </HeaderFrame>
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
