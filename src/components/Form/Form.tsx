import React from "react";
// import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledForm, SubmitButton } from "./styles";

export const Form = () => {
  return (
    <StyledForm>
      <Title>Add Expense</Title>
      {/* <Input {} type="number" placeholder="enter name ..." /> */}
      {/* <Input {} type="number" placeholder="enter cost ..." /> */}
      <SubmitButton>Done</SubmitButton>
    </StyledForm>
  );
};
