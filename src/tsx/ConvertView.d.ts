import { FC } from 'react';
interface IRecentRateHistoryItem {
    date: Date;
    value: number;
}
interface IConvertViewProps {
    opendrawer: boolean;
    fromCurrency: string;
    toCurrency: string;
    toStart: number;
    converted: number;
    fromIntro: string;
    toIntro: string;
    recentRateHistory: Array<IRecentRateHistoryItem>;
}
declare const ConvertView: FC<IConvertViewProps>;
export { ConvertView };
