import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { Input, StyledForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { ExpensesContext } from "../../contexts/ExpensesContext/ExpensesContext";
import { SubmitValue } from ".";
import { v4 as uuids4 } from "uuid";

export const Form = () => {
  const { setExpenses } = useContext(ExpensesContext);
  const { handleSubmit, reset, register } = useForm<SubmitValue>();

  const onSubmit: SubmitHandler<SubmitValue> = (expense) => {
    const newExpense = {
      ...expense,
      id: uuids4(),
    };

    setExpenses(newExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <Input
        type="text"
        placeholder="enter name ..."
        {...register("name", { maxLength: 15, required: true })}
      />
      <Input
        type="number"
        placeholder="enter cost ..."
        {...register("cost", { maxLength: 5, required: true })}
      />
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
