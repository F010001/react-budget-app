import { NameInput } from "../NameInput/NameInput";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { CostInput } from "../CostInput/CostInput";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { SubmitValue } from ".";

export const Form = () => {
  const { setExpenses } = useContext(ExpensesContext);

  const { handleSubmit, control } = useForm<SubmitValue>();

  const onSubmit: SubmitHandler<SubmitValue> = (expenses: SubmitValue) => {
    setExpenses(expenses);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <CostInput control={control} />
      <NameInput control={control} />
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
