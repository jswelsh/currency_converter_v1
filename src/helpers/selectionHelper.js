//used in SelectionForm
const handleClick = (props) => {
  const [newFromCur, newToCur] = [props.toCurrency, props.fromCurrency]

  console.log(props)
  props.setFromCurrency(newFromCur)
  props.setToCurrency(newToCur)
}

//used in SelectionComponent
const handleChange = (event, setter) => {
const target = event.target;
const value = target.value;
setter(value)
}


export { handleClick, handleChange }
