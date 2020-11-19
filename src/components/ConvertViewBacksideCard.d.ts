import { FC } from 'react';
interface IRecentRateHistoryItem {
    value: string
    date: Date
}
interface IConvertViewBacksideCardProps {
    // recentRateHistory: Array<IRecentRateHistoryItem>
    recentRateHistory: any
    converted: number
    currency: string | number
    avatar: Object
    name: string
}
declare const ConvertViewBacksideCard: FC<IConvertViewBacksideCardProps>;
export {ConvertViewBacksideCard}
