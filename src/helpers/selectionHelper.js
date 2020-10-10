//used in SelectionForm
const handleClick = (props) => {
  console.log("hi",props)
  const {toCurrency, fromCurrency, setter} = props
  console.log("hhhh", setter)
  setter('fromCurrency', toCurrency)
  setter('toCurrency', fromCurrency)
}

//used in SelectionComponent
const handleChange = (event, setter) => {
  console.log('handle selection component', event)
const target = event.target;
const value = target.value;
const name = target.name
setter(name, value)
}


export { handleClick, handleChange }
