import React, { useContext } from "react";
import Select, { SingleValue } from "react-select";
import { IOption } from "./types";
import { Currency } from "../../config";
import { CurrencyContext } from "../../context/CurrencyContext/CurrencyContext";

export const options: IOption[] = [
  { value: Currency.USD, label: "USD" },
  { value: Currency.EUR, label: "EUR" },
  { value: Currency.GBP, label: "GBP" },
];

export const CustomSelect = () => {
  const { currency, setCurrency } = useContext(CurrencyContext);
  const getValue = () => {
    return currency
      ? options.find((option) => option.value === currency)
      : options[0];
  };

  const handleCurrency = (option: SingleValue<IOption>): void => {
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
