
//used in UserInputTab
function shortenDateString(string) {
  return string.toISOString().split('T')[0]
}

function fourWeeksFromToday() {
    const day = new Date();
    const FourWeeksAgo = new Date(
      day.getFullYear(), 
      day.getMonth(), 
      day.getDate() - 28)
    return shortenDateString(FourWeeksAgo);
  }

  export { fourWeeksFromToday, shortenDateString }