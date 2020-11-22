//used in SelectionForm

interface IhandleClickFunc {(
  payload: {
    toCurrency: string
    fromCurrency: string
    setter: any
  }): void
}
let handleClick: IhandleClickFunc

handleClick = function ({toCurrency, fromCurrency, setter}) {
  /* 
  need to do a flip flop on these setters
  from > to
  to > from */
  setter({
    currency:toCurrency, 
    mode:'fromCurrency'})
  setter({
    currency:fromCurrency, 
    mode:'toCurrency'})
}


interface IHandleChangeFunc {
  (payload: {
    event: any
    setter: any
  }):void
}

let handleChange: IHandleChangeFunc

//used in SelectionComponent
handleChange = function({event, setter}) {
const target = event.target;
const value = target.value;
const name = target.name
setter({
  currency:value, 
  mode:name
})
}


export { handleClick, handleChange }
