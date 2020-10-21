
//used in UserInputTab
function shortenDateString(string) {
  return string.toISOString().split('T')[0]
}

function fourWeeksFromToday() {
    const today = new Date();
    const twoYearsAgo = new Date(
      today.getFullYear(), 
      today.getMonth(), 
      today.getDate() - 365*2)
    return shortenDateString(twoYearsAgo);
  }

  function initializeDateRange() {
    const today = shortenDateString(new Date())
    return [
      fourWeeksFromToday(),
      today
    ]
  }

  export { fourWeeksFromToday, shortenDateString, initializeDateRange }