export function CompareListItem({ currencySelectHandler, fromCurrency, currency, primary, }: {
    currencySelectHandler(currency:string): void; 
    fromCurrency: string;
    currency: string;
    primary: number;
}): React.FunctionComponentElement<import("@material-ui/core").CardProps>;
import React from "react";
