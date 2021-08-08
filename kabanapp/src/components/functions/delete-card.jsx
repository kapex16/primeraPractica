import RetrieveLocalStorage from "./retrieve";
import StoreCards from "./store";

function EraseCard(delIndex) {
  let allCards = RetrieveLocalStorage("MyStoredCards");
  allCards.splice(delIndex, 1);
  StoreCards(allCards);
}

export default EraseCard;
