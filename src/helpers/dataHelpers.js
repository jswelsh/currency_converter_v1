function fourWeeksFromToday() {
    const day = new Date();
    const FourWeeksAgo = new Date(
      day.getFullYear(), 
      day.getMonth(), 
      day.getDate() - 28)
        .toISOString()
        .split('T')[0];
    return FourWeeksAgo;
  }

  export { fourWeeksFromToday }