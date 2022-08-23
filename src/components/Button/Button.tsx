import { SubmitButton } from "./styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
  children: string;
}

export const Button = ({ type, isDisabled, children }: IButton) => {
  return <SubmitButton type={type} disabled={isDisabled} children={children} />;
};
