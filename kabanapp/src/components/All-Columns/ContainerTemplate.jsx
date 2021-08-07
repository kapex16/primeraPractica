import Column from "../Column/Column";
import "./ContainerTemplate.css";
import React, { useState } from "react";

function TemplateContainer() {
  const [allCards, setCards] = useState([
    {
      title: "Creación del CI/CD para el frontal",
      status: "To do",
      date: "01/01/2021",
    },
    {
      title: "terminar este to-do list",
      status: "To do",
      date: "08/08/21",
    },
    {
      title: "3a task",
      status: "Done",
      date: "03/03/2021",
    },
  ]);
  // let lastUpdate = '';
  return (
    <div className="ContainerTemplate">
      <Column
        arr={allCards}
        name="To do"
        numberOfItems=""
        status="undone"
      ></Column>
      <Column
        arr={allCards}
        name="In Progress"
        numberOfItems=""
        status="undone"
      ></Column>
      <Column
        arr={allCards}
        name="Done"
        numberOfItems=""
        clearall={true}
        status="done"
      ></Column>
    </div>
  );
}

export default TemplateContainer;
