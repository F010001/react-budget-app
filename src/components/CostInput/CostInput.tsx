import { Controller } from "react-hook-form";
import { Input } from "./styles";

export interface IInput {
  type: string;
  placeholder: string;
}

export const CostInput = ({ control }: any) => {
  return (
    <Controller
      name="cost"
      control={control}
      render={({ field }) => {
        return <Input {...field} type="number" placeholder="enter cost ..." />;
      }}
    />
  );
};
