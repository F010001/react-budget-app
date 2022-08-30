import { createContext, FC, ReactNode, useState } from "react";
import { ICurrencyContext } from "./types";
import { Currency } from "../../config";

export const CurrencyContext = createContext<ICurrencyContext>(
  {} as ICurrencyContext
);

const useContextCurrency = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (newCurrency) =>
      setCurrencyContext((ctx) => ({ ...ctx, currency: newCurrency })),
  });

  return currencyContext;
};

export const CurrencyContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <CurrencyContext.Provider value={useContextCurrency()}>
      {children}
    </CurrencyContext.Provider>
  );
};
