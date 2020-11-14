const data = require('../helpers/currency.json'); // forward slashes will depend on the file location


const label = ({drawer, fromCurrency}) => {
  // const {drawer, fromCurrency} = payload
  // console.log('delta', drawer, fromCurrency)
  return (
    (fromCurrency && (drawer === true)) ? `Amount in ${data[fromCurrency]['name']}s` : 
    fromCurrency && fromCurrency)
}
const handleChange = (payload) => {
  const {event, setAmount} = payload
  setAmount( 
    event.target.value
  );
};

export { handleChange, label }
