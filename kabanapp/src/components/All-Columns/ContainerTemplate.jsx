import Column from "../Column/Column";
import "./ContainerTemplate.css";
import React, { useState } from "react";
import RetrieveLocalStorage from "../functions/retrieve";

function TemplateContainer() {
  let [allCards, setAllCards] = useState(RetrieveLocalStorage("MyStoredCards"));

  return (
    <div className="ContainerTemplate">
      <Column name="To do" numberOfItems="" status="undone"></Column>
      <Column name="In Progress" numberOfItems="" status="undone"></Column>
      <Column
        name="Done"
        numberOfItems=""
        clearall={true}
        status="done"
      ></Column>
    </div>
  );
}

export default TemplateContainer;
