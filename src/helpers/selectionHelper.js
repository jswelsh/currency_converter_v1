//used in SelectionForm
const handleClick = (props) => {
  const {toCurrency, fromCurrency, setter} = props
  setter('fromCurrency', toCurrency)
  setter('toCurrency', fromCurrency)
}

//used in SelectionComponent
const handleChange = (event, setter) => {
const target = event.target;
const value = target.value;
const name = target.name
setter(name, value)
}


export { handleClick, handleChange }
