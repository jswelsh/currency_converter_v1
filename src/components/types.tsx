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

export interface IUserInputTabProps {
	convertHistoryHandler(): void 
	compareListHandler(): void 
  currenciesList: Array<ICurrency>
	convertHandler: string
	setFromCurrency(currency: string): boolean
	setToCurrency(currency: string): boolean
	fromCurrency: string
	toCurrency: string
	drawer: string
	mode: boolean
}

interface ICurrencySelectHandlerProps {
  mode: string
  currency: string
}
export interface currencySelectHandler {
  
}