import { FC } from 'react';
interface recentRateHistoryItem {
    date: Date;
    value: string;
}
interface IConvertViewCardTableProps {
    recentRateHistory: Array<recentRateHistoryItem>;
    converted: number;
}
declare const ConvertViewCardTable: FC<IConvertViewCardTableProps>;
export { ConvertViewCardTable };
