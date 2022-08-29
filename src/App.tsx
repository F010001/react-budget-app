import { ExpensesBlock } from "./components/Expenses/Expenses";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { Wrapper } from "./ui/styles";

export const App = () => {
  return (
    <Wrapper>
      <Header />
      <ExpensesBlock />
      <Form />
    </Wrapper>
  );
};
