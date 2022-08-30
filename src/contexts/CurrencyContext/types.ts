import { Currency } from "../../config";

export interface ICurrencyContext {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
}
