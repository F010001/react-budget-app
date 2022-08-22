import React from "react";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm, SubmitButton } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title>Add Expense</Title>
      <Input />
      <Input />
      <SubmitButton>Done</SubmitButton>
    </StyledForm>
  );
};
