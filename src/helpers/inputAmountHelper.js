const data = require('../helpers/currency.json'); // forward slashes will depend on the file location


const label = ({drawer, fromCurrency}) => {

  return (
    (fromCurrency && (drawer === true)) ? `Amount in ${data[fromCurrency]['name']}s` : 
    fromCurrency && fromCurrency)
}
const handleChange = ({event, setAmount}) => {
  console.log('demeter',event.target.value)
  setAmount( 
    event.target.value
  );
};

export { handleChange, label }
