const data = require('../helpers/currency.json'); // forward slashes will depend on the file location


const label = (payload) => {
  const {drawer, fromCurrency} = payload
  return (
    drawer === true ? `Amount in ${data[fromCurrency]['name']}s` : 
    fromCurrency)
}
const handleChange = (payload) => {
  const {event, setAmount} = payload
  setAmount( 
    event.target.value
  );
};

export { handleChange, label }
