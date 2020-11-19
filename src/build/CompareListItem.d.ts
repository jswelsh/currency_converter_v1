import { FC } from 'react';
interface CompareListItemProps {
    currencySelectHandler(string: string): void;
    fromCurrency: string;
    currency: string;
    primary: number;
}
declare const CompareListItem: FC<CompareListItemProps>;
export { CompareListItem };
