import React from "react";
import {
  Delete,
  CheckCircleOutline,
  RadioButtonChecked,
} from "@material-ui/icons";
import "./style.css";


function Card(props){

    return(

      <div className="container-task">
      {props.status === "done" ? (
        <CheckCircleOutline className='icon-red'>{props.status}</CheckCircleOutline>
      ) : (
        <RadioButtonChecked className='icon-green'>{props.status}</RadioButtonChecked>
      )}
      <div className="text-task">
        <h3 className="title-color">{props.title}</h3>
        <p>
          #{props.id} created on {props.date}
        </p>
      </div>
      <Delete>{props.status}</Delete>
    </div>
    );
}
export default Card;



