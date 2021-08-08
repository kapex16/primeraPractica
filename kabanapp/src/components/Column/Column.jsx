import "../Column/Column.css";
import Card from "../Card/card";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";

function Column(props) {
  const [show, setShow] = useState(true);
  return (
    <div className="card_template">
      <div className="container-todo">
        <h1 className="title-column">
          <span className="circle_count">{props.numberOfItems}</span>
          {props.name}
        </h1>
        <div className="containerIcon_third_column">
          <button className="icon_Add" onClick={() => setShow((s) => !s)}>
            <AddIcon></AddIcon>
          </button>
          {props.clearall ? (
            <button className="button-clear-all">Clear All</button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="box_add_card" style={{ display: show ? "block" : "none" }}>
        <textarea
          className="input_box"
          type="text"
          placeholder="Enter a note"
        ></textarea>
        <div className="container_button_note">
          <button className="button_input button_add_note">Add</button>
          <button className="button_input button_cancel_note">Cancel</button>
        </div>
      </div>
      <div className="container_cards">
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
        <Card
          title="Creación del CI/CD para el frontal"
          status={props.status}
          id="23"
          date="20/05/20"
        ></Card>
      </div>
    </div>
  );
}

export default Column;
