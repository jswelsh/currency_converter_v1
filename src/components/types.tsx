export interface IButtonProps {
  handleSubmit(): void;
  primary: string;
}

export interface ICompareListItemProps {
  currencySelectHandler(currency:string): void; 
  fromCurrency: string
  currency: string
  primary: number
}

export interface ICompareListItem {
  currency: string
  value: number
}

export interface ICompareViewProps {
  setFromCurrency(currency:string): void
  fromCurrency: string
  compareList: Array<ICompareListItem>
  opendrawer: boolean
}

export interface IRecentRateHistoryItem {
  date: Date
  value: number
}

export interface IConvertViewProps {
  recentRateHistory: Array<IRecentRateHistoryItem>
  fromCurrency: string
  toCurrency: string
  opendrawer: boolean
  fromIntro: string
  converted: number
  toStart: number
  toIntro: string
}

export interface IConvertViewBacksideCardProps {
  recentRateHistory: any
  converted: number
  currency: any
  avatar: Object
  name: string
}

export

export

export

export

export

export

export

export

export

export

export

export
