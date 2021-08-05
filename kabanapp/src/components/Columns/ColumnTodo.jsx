import "./ColumnTodo.css";
import Items from "../Input/items";
import TemplateCard from "../Card/card";

function Column(props) {
  return (
    <div className="card_template">
      <div className="container-todo">
        <h1 className="title-column">
          <span className="circle_count">{props.numberOfItems}</span>
          {props.name}
        </h1>
        <button className="button_add_task">+</button>
      </div>

      <Items></Items>
      <TemplateCard></TemplateCard>
    </div>
  );
}

export default Column;
