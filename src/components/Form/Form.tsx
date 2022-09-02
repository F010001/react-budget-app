import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { AttentionMassage, Input, StyledForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext } from "react";
import { ExpensesContext } from "../../context/ExpensesContext/ExpensesContext";
import { SubmitValue } from "./types";
import { v4 as uuids4 } from "uuid";

export const Form = () => {
  const { setExpense } = useContext(ExpensesContext);
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<SubmitValue>();

  const onSubmit: SubmitHandler<SubmitValue> = (expense) => {
    const newExpense = {
      ...expense,
      id: uuids4(),
    };

    setExpense(newExpense);
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <Input
        type="text"
        placeholder="enter name ..."
        {...register("name", {
          required: "Name is required",
          maxLength: {
            value: 15,
            message: "Name must be less than 15 characters long",
          },
          pattern: {
            value: /[A-Za-z]/,
            message: "Name must contain only letters",
          },
        })}
      />
      {errors.name && (
        <AttentionMassage>{errors.name.message}</AttentionMassage>
      )}
      <Input
        type="number"
        placeholder="enter cost ..."
        {...register("cost", {
          required: "Cost is required",
          maxLength: {
            value: 5,
            message: "Cost must contain only 5 number",
          },
        })}
      />
      {errors.cost && (
        <AttentionMassage>{errors.cost.message}</AttentionMassage>
      )}
      <Button type="submit">Done</Button>
    </StyledForm>
  );
};
