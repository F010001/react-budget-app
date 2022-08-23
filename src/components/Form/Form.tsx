import React, { FormEvent, useContext, useEffect, useState } from "react";
import { AppContext } from "../../contexts/AppContext/AppContext";
import { useInput } from "../../hooks/useInput";
import { FormInput } from "../FormInput/FormInput";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";

export const Form = () => {
  const inputName = useInput();
  const inputCost = useInput();

  const [valueButton, setButtonValue] = useState<boolean>(false);
  const { name, cost, setExpense } = useContext(AppContext);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
  };

  useEffect((): void => {
    if (inputName.value && inputCost.value) {
      setButtonValue(false);
    } else {
      setButtonValue(true);
    }
  }, [inputName.value, inputCost.value]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Add Expense</Title>
      <FormInput {...inputName} type="text" placeholder="enter name ..." />
      <FormInput {...inputCost} type="number" placeholder="enter cost ..." />
      <Button type="submit" isDisabled={valueButton}>
        Done
      </Button>
    </StyledForm>
  );
};
