import { Input } from "./styles";

export const SearchInput = ({ onChange, value }: any) => {
  return (
    <Input
      placeholder="search ..."
      type="search"
      onChange={onChange}
      value={value}
    />
  );
};
