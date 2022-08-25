import { NameInput } from "../NameInput/NameInput";
import { Button } from "../Button/Button";
import { Title } from "../Title/Title";
import { StyledForm } from "./styles";
import { SubmitHandler, useForm } from "react-hook-form";
import { CostInput } from "../CostInput/CostInput";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext/AppContext";

type SubmitValue = {
  name: string;
  cost: number;
};

export const Form = () => {
  const { data, setData } = useContext(AppContext);

  const { handleSubmit, control } = useForm<SubmitValue>();

  const onSubmit: SubmitHandler<SubmitValue> = (obj: SubmitValue) => {
    // setData(obj);
    console.log(obj);
    // console.log(data);
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
