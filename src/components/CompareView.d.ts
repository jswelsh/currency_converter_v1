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
}
declare const CompareView: FC<ICompareViewProps>;
export { CompareView };
