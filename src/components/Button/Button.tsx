import { SubmitButton } from "./styles";

export interface IButton {
  type: "button" | "submit" | "reset";
  children: string;
}

export const Button = ({ type, children }: IButton) => {
  return <SubmitButton type={type} children={children} />;
};
