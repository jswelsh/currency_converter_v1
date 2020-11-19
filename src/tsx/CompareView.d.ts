import { FC } from 'react';
interface ICompareListItem {
    currency: string;
    value: number;
}
interface ICompareViewProps {
    setFromCurrency(currency: string): void;
    fromCurrency: string;
    compareList: Array<ICompareListItem>;
    opendrawer: boolean;
    setAmount: number;
    amount: number;
}
declare const CompareView: FC<ICompareViewProps>;
export { CompareView };
