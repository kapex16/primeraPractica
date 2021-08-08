function StoreCards(ArrayToStore) {
  if (Array.isArray(ArrayToStore)) {
    localStorage.setItem("MyStoredCards", JSON.stringify(ArrayToStore));
    SetLastUpdate();
  }
}
function SetLastUpdate() {
  const currentDay = new Date();
  const monthNumber = new Date().getMonth();
  let monthNames = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "October",
    "Nov",
    "Dec",
  ];
  let monthName = monthNames[monthNumber];
  let lastUpdate = currentDay.getDate() + " " + monthName;
  //Store last update
  localStorage.setItem("LastUpdated", lastUpdate);
  //console.log(currentDay.getDate() + ' ' + monthName);
}
export default StoreCards;
