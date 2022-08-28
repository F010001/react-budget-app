import { ChangeEvent } from "react";
import { Input } from "./styles";

export interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({ onChange, value }: IProps) => {
  return (
    <Input
      placeholder="search ..."
      type="search"
      onChange={onChange}
      value={value}
    />
  );
};
