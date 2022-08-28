import { Currency } from "../../config";

export interface IOption {
  value: Currency;
  label: "USD" | "EUR" | "GBP";
}
