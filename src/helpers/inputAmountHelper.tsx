const data = require('./currency.json')

interface ILabelFunc {(
  payload: {
    drawer: boolean
    fromCurrency: string
  }): string}

let label:ILabelFunc
label = function ({
  drawer,
  fromCurrency
}) {

  return (
    (fromCurrency && (drawer === true)) ? `Amount in ${data[fromCurrency]['name']}s` :
    fromCurrency && fromCurrency)
}

interface IHandleChangeFunc {
  (payload:{
    event: any,
    setAmount: any
  }): void
}
let handleChange: IHandleChangeFunc

handleChange = function ({event, setAmount}) {
  setAmount(
    event.target.value
  );
};

export { handleChange, label }
