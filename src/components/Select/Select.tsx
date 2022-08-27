import React, { useContext } from "react";
import Select, { SingleValue } from "react-select";
import { CurrencyContext } from "../../contexts/CurrencyContext/CurrencyContext";

export const options: any[] = [
  { value: "$", label: "USD" },
  { value: "€", label: "EUR" },
  { value: "£", label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);
  const getValue = () => {
    return currency
      ? options.find((option) => option.value === currency)
      : options[0];
  };

  const handleCurrency = (option: SingleValue<any>): void => {
    if (option) setCurrency(option.value);
  };

  return (
    <Select
      isSearchable={false}
      options={options}
      onChange={handleCurrency}
      value={getValue()}
    />
  );
};
