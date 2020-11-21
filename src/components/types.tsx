export interface IButtonProps {
  handleSubmit(): void;
  primary: string; }

export interface ICompareListItemProps {
  currencySelectHandler(currency:string): void; 
  fromCurrency: string
  currency: string
  primary: number }

interface ICompareListItem {
  currency: string
  value: number }
export interface ICompareViewProps {
  setFromCurrency(currency:string): void
  fromCurrency: string
  compareList: Array<ICompareListItem>
  opendrawer: boolean }

interface ICurrencyArrayItem {
  date: Date
  value: number }
export interface IConvertViewProps {
  recentRateHistory: Array<ICurrencyArrayItem>
  fromCurrency: string
  toCurrency: string
  opendrawer: boolean
  fromIntro: string
  converted: number
  toStart: number
  toIntro: string }

export interface IConvertViewBacksideCardProps {
  recentRateHistory: any
  converted: number
  currency: any
  avatar: Object
  name: string }

export interface IConvertViewCardTableProps {
  recentRateHistory: Array<ICurrencyArrayItem>
  converted: number }

export interface IConvertViewFrontsideCardProps {
  currency: any
  symbol: any
  amount: any
  avatar: Object
  title: any }

export interface IConvertViewIntroCardProps {
  avatar: Object
  title: string
  currency: string
  intro: string }

interface ICurrency {
  currency: string }

export interface ICurrencySelectionFormProps {
  currencySelectHandler(mode: string, currency: string): void
  currenciesList: Array<ICurrency>
  fromCurrency: string
  toCurrency: string
  mode: string }

export interface IExchangeHistoryGraphProps {
  history: Array<ICurrencyArrayItem>
  opendrawer: boolean
}

export interface IDataItem {
  date: Date
  value: number
  color?: Object
}

export interface IUserInputTabProps {
  convertHistoryHandler(payload: object): void 
  compareListHandler(fromCurrency: string, amount: number): void 
  currenciesList: Array<ICurrency>
  convertHandler(payload: object): void 
  setFromCurrency(currency: string): boolean
  setToCurrency(currency: string): boolean
  fromCurrency: string
  toCurrency: string
  opendrawer: string
  mode: string
}

export interface IcurrencySelectHandlerFunc {
  (currency: string, mode: string): boolean;
}

export interface IExchangeHistoryPopOverProps {
  dateRange: Array<Date>
  handleChange(event: Array<Date>): void
}

export interface IInputAmountFieldProps {
  fromCurrency: string
  setAmount(amount: number): void
  opendrawer: string
  amount: number
  // this one is a hard one to fix
  //setAmount(amount: number): void
}

export interface ISelectionComponentProps {
  icon: Object
  name: string
  // value: string
  currencySelectHandler(mode: string, currency: string): void
  currenciesList: Array<ICurrency>
}

export interface ITabSelectorProps {
  modeHandler(mode: string): void,
  mode: string
}

export interface IToolBarProps extends IUserInputTabProps {
  setDrawerOpen(state: boolean): void
  modeHandler(mode: string): void
}