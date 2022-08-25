import { Controller } from "react-hook-form";
import { Input } from "./styles";

export interface IInput {
  type: string;
  placeholder: string;
}

export const NameInput = ({ control }: any) => {
  return (
    <Controller
      name="name"
      control={control}
      render={({ field }) => {
        return <Input {...field} type="text" placeholder="enter name ..." />;
      }}
    />
  );
};
