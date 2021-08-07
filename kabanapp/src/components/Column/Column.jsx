import "../Column/Column.css";
import Card from "../Card/card";
import AddIcon from "@material-ui/icons/Add";
import React, { useState } from "react";
// import setCards from "../../App";
function Column(props) {
  const [show, setShow] = useState(true);
  const cards = props.arr.map((item, index) => {
    return props.name === item.status ? (
      <Card
        title={item.title}
        status={item.status}
        key={index}
        id={index}
        date={item.date}
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
            <button className="button-clear-all">clear all</button>
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
          // onSubmit={(e) => setEntradas(e, this.value)}
        ></textarea>
        <div className="container_button_note">
          <button className="button_input button_add_note">Add</button>
          <button className="button_input button_cancel_note">Cancel</button>
        </div>
      </div>
      <div className="container_cards">{cards}</div>
    </div>
  );
}

export default Column;
