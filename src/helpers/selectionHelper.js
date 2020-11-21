//used in SelectionForm
const handleClick = ({toCurrency, fromCurrency, setter}) => {
  /* 
  need to do a flip flop on these setters
  from > to
  to > from */
  setter({
    currency:toCurrency, 
    mode:'fromCurrency'
  })
  setter({
    currency:fromCurrency, 
    mode:'toCurrency'
  })

}

//used in SelectionComponent
const handleChange = (event, setter) => {
const target = event.target;
const value = target.value;
const name = target.name
setter({
  currency:value, 
  mode:name
})
}


export { handleClick, handleChange }
