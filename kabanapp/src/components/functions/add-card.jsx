import RetrieveLocalStorage from "./retrieve";
import StoreCards from "./store";

function AddNewCard(text, column) {
  let allCards = RetrieveLocalStorage("MyStoredCards");
  let newCard = [];
  let dateCard = "";
  let date = new Date();

  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  if (month < 10) {
    dateCard = `${day}/0${month}/${year}`;
  } else {
    dateCard = `${day}/${month}/${year}`;
  }
  newCard = [{ title: text, status: column, date: dateCard }];

  allCards.push(newCard);

  return StoreCards(allCards);
}

export default AddNewCard;
