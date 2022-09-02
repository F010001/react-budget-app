import { Currency } from "../../config";

export interface IOption {
  readonly value: Currency;
  readonly label: keyof typeof Currency;
}
