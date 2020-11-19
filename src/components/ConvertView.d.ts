import { FC } from 'react';
interface IRecentRateHistoryItem {
    date: Date;
    value: number;
}
interface IConvertViewProps {
    recentRateHistory: Array<IRecentRateHistoryItem>;
    fromCurrency: string;
    toCurrency: string;
    opendrawer: boolean;
    fromIntro: string;
    converted: number;
    toStart: number;
    toIntro: string;
}
declare const ConvertView: FC<IConvertViewProps>;
export { ConvertView };
