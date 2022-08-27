import { Budget } from "../Budget/Budget";
import { Remaining } from "../Remaining/Remaining";
import { CustomSelect } from "../Select/Select";
import { Spent } from "../Spent/Spent";
import { Title } from "../Title/Title";
import { HeaderTitle, StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderTitle>
        <Title>Budget App</Title>
        <CustomSelect />
      </HeaderTitle>
      <Budget />
      <Remaining />
      <Spent />
    </StyledHeader>
  );
};
