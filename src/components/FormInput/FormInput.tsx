import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

export interface IInput {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  type: string;
  placeholder: string;
}

export const FormInput = ({ value, onChange, type, placeholder }: IInput) => {
  return (
    <StyledInput
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};
