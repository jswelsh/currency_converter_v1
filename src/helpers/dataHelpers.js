
//used in UserInputTab
function shortenDateString(string) {
  return string.toISOString().split('T')[0]
}

function fourWeeksFromToday() {
    const today = new Date();
    const FourWeeksAgo = new Date(
      today.getFullYear(), 
      today.getMonth(), 
      today.getDate() - 28)
    return shortenDateString(FourWeeksAgo);
  }

  function initializeDateRange() {
    const today = shortenDateString(new Date())
    return [
      fourWeeksFromToday(),
      today
    ]
  }

  export { fourWeeksFromToday, shortenDateString, initializeDateRange }