import { FC } from 'react';
interface ICompareListItemProps {
    currencySelectHandler(currency: string): void;
    fromCurrency: string;
    currency: string;
    primary: number;
}
declare const CompareListItem: FC<ICompareListItemProps>;
export { CompareListItem };
