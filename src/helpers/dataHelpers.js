
//used in UserInputTab
function shortenDateString(string) {
  return string.toISOString().split('T')[0]
}

function getDaysAgo(numberOfDays) {
	const today = new Date();
	const oneYearAgo = new Date(
		today.getFullYear(), 
		today.getMonth(), 
		today.getDate() - numberOfDays)
	return shortenDateString(oneYearAgo);
}


function initializeDateRange(numberOfDays) {
	const toDate = shortenDateString(new Date())
	const fromDate = getDaysAgo(numberOfDays)
	return [
		fromDate,
		toDate
	]
}	
function historyFormatter(historyObj, toCurrency) {
	const history = [];
	Object.entries(historyObj).forEach(([key, value]) => {
		history.push({
			date: new Date(key),
			value: value[toCurrency]})
	})
	return history.sort((a, b) =>  a.date - b.date );
}

export { shortenDateString, initializeDateRange, historyFormatter }