
//used in UserInputTab
type IShortenDateString = (string: string, cutPoint: number|null) => string
const shortenDateString:IShortenDateString = (string, cutPoint) => {
  //trim extra values from date string, cutpoint is usually used to cut the year off
  return (cutPoint === null) ? new Date(string).toISOString().split('T')[0] :
  new Date(string).toISOString().split('T')[0].substring(cutPoint)
}

type IgetDaysAgo = (numberOfDays: number) => string
const getDaysAgo:IgetDaysAgo = (numberOfDays) => {
  const today = new Date();
  const oneYearAgo = new Date(
    today.getFullYear(), 
    today.getMonth(), 
    today.getDate() - numberOfDays)
  return shortenDateString(oneYearAgo.toDateString(), null);
}

type IInitializeDateRange = (numberOfDays:number) => string[]
const initializeDateRange: IInitializeDateRange = (numberOfDays) => {
  const toDate = shortenDateString((new Date()).toString(), null)
  const fromDate = getDaysAgo(numberOfDays)
  return [
    fromDate,
    toDate
  ]
}
type ICurrencyItem ={
  [currency:string]:number
}
type ICurrencyHistory = {
  key:ICurrencyItem
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