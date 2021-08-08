
function AddNewCard(props) {
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
  newCard = [props.title, props.status, dateCard]
  return newCard.push();
      
//    AllCards.push(newCard); // all cards no esta porque falta array general.
}

export default AddNewCard;
