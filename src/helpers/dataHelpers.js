
//used in UserInputTab
function shortenDateString(string) {
  return string.toISOString().split('T')[0]
}

function oneYearAgo() {
    const today = new Date();
    const oneYearAgo = new Date(
      today.getFullYear(), 
      today.getMonth(), 
      today.getDate() - 365)
    return shortenDateString(oneYearAgo);
  }

  function initializeDateRange() {
    const today = shortenDateString(new Date())
    return [
      oneYearAgo(),
      today
    ]
  }

  export { shortenDateString, initializeDateRange }