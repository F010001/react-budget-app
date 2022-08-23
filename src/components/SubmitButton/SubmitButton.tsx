import { SubmitButton } from "./styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  isDisabled: boolean;
}

export const Button = ({ type, isDisabled }: IButton) => {
  return <SubmitButton type={type} disabled={isDisabled} />;
};
