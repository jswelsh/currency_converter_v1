
//used in UserInputTab
type IShortenDateStringProps = {
  date: Date,
  cutPoint: number|null
}
type IShortenDateString = (props: IShortenDateStringProps) => string

const shortenDateString:IShortenDateString = ({date, cutPoint}) => {
  return (cutPoint === null) ? date.toISOString().split('T')[0] :
  date.toISOString().split('T')[0].substring(cutPoint)
}

type IGetDaysAgo = (numberOfDays: number) => string

const getDaysAgo:IGetDaysAgo = (numberOfDays) => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear(), 
    today.getMonth(), 
    today.getDate() - numberOfDays)
  return shortenDateString({date:oneYearAgo, cutPoint:null});
}

type IInitializeDateRange = (numberOfDays:number) => string[]

const initializeDateRange: IInitializeDateRange = (numberOfDays) => {
  const toDate = shortenDateString({date:new Date(), cutPoint:null})
  const fromDate = getDaysAgo(numberOfDays)
  return [
    fromDate,
    toDate
  ]
}
type ICurrencyHistory = {
  key:{
    [currency:string]:number
  }
}
type INewCurrencyHistory = {
  date:number
  value:number
}
type IHistoryFormatter = (historyObj:ICurrencyHistory, toCurrency: string) => INewCurrencyHistory[]

const historyFormatter:IHistoryFormatter = (historyObj, toCurrency) => {
  const history:INewCurrencyHistory[] = [];
  Object.entries(historyObj).forEach(([key, value]) => {
    let date = new Date(key)
    history.push({
      date: Date.parse(date.toISOString()),
      value: value[toCurrency]})
  })
  return history.sort((a, b) => a.date - b.date );
}

export { shortenDateString, initializeDateRange, historyFormatter }