function RetrieveLocalStorage(localvarname) {
  if (localStorage.getItem(localvarname) !== null) {
    let result = localStorage.getItem(localvarname);
    result = JSON.parse(result);
    return result;
  } else {
    return [];
  }
}
export default RetrieveLocalStorage;
