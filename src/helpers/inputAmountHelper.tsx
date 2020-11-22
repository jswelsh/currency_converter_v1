const data = require('./currency.json'); // forward slashes will depend on the file location

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

interface IhandleChangeFunc {
  (payload:{
    event: any,
    setAmount: any
  }): void
}
let handleChange: IhandleChangeFunc

handleChange = function ({event, setAmount}) {
  setAmount( 
    event.target.value
  );
};

export { handleChange, label }
