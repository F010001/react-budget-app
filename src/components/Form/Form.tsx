import React, { FormEvent, useContext, useEffect, useState } from "react";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";

interface ISubmit {
  name: string;
  cost: number;
}

export const Form = () => {
  const { register, handleSubmit } = useForm();
  const [valueButton, setButtonValue] = useState<boolean>(false);

  const onSubmit: any = (data: ISubmit) => {
    console.log(data);
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title>Add Expense</Title>
      <FormInput
        {...register("name")}
        type="text"
        placeholder="enter name ..."
      />
      <FormInput
        {...register("cost")}
        type="number"
        placeholder="enter cost ..."
      />
      <Button type="submit" isDisabled={valueButton}>
        Done
      </Button>
    </StyledForm>
  );
};
