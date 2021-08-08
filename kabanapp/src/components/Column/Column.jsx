import "../Column/Column.css";
import Card from "../Card/card";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
import ClearAllButton from "../functions/delete-all";
import AddNewCard from "../functions/add-card";
import RetrieveLocalStorage from "../functions/retrieve";
// import setCards from "../../App";

function Column(props) {
  const [show, setShow] = useState(true);

  const [entradas, setEntradas] = useState("");

  let allCards = RetrieveLocalStorage("MyStoredCards");

  const cards = allCards.map((card, index) => {
    return props.name === card[0].status ? (
      <Card
        title={card[0].title}
        status={card[0].status}
        key={index}
        id={index}
        date={card[0].date}
      ></Card>
    ) : (
      ""
    );
  });
  return (
    <div className="card_template">
      <div className="container-todo">
        <h1 className="title-column">
          <span className="circle_count">{props.numberOfItems}</span>
          {props.name}
        </h1>
        <div>
          <button className="icon_Add" onClick={() => setShow((s) => !s)}>
            <AddIcon></AddIcon>
          </button>
          {props.clearall ? (
            <button
              onClick={() => ClearAllButton(allCards, props.name)}
              className="button-clear-all"
            >
              clear all
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <div
        className="box_add_card"
        style={{ display: show ? "block" : "none" }}
      >
        <textarea
          className="input_box"
          type="text"
          placeholder="Enter a note"
          onBlur={(e) => setEntradas(e.target.value)}
        ></textarea>
        <div className="container_button_note">
          {/* <AddNewCard cards={Entradas}></AddNewCard> */}
          <button
            onClick={() => AddNewCard(entradas, props.name)}
            className="button_input button_add_note"
          >
            Add
          </button>
          <button className="button_input button_cancel_note">Cancel</button>
        </div>
      </div>
      <div className="container_cards">{cards}</div>
    </div>
  );
}

export default Column;
