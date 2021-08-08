import StoreCards from "./store";

function ClearAllButton(allArray, col) {
  let IndexToDel = [];
  allArray.forEach((item, index) => {
    if (item[0].status === col) {
      IndexToDel.push(index);
    }
  });
  // console.log(IndexToDel);
  if (IndexToDel.length > 0) {
    for (var i = IndexToDel.length - 1; i >= 0; i--) {
      allArray.splice(IndexToDel[i], 1);
      IndexToDel.splice(i, 1);
      i = IndexToDel.length;
    }
    StoreCards(allArray);
  }
  // console.log(allArray);
  return allArray;
}

export default ClearAllButton;
