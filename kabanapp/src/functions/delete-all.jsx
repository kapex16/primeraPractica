function ClearAllButton(allArray, col) {
  allArray.forEach((item, index) => {
    if (item.status === col) {
      allArray.splice(index, 1);
    }
  });
  return allArray;
}

export default ClearAllButton;
