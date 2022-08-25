import { StyledInput } from "./styles";

export interface IInput {
  type: string;
  placeholder: string;
}

export const FormInput = ({ type, placeholder }: IInput) => {
  return <StyledInput type={type} placeholder={placeholder} />;
};
