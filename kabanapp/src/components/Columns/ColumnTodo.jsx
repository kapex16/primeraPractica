import "./ColumnTodo.css";
import Items from "../Input/items";
import Card from "../Card/card";
import AddIcon from '@material-ui/icons/Add';

function Column(props) {
  return (
    <div className="card_template">
      <div className="container-todo">
        <h1 className="title-column">
          <span className="circle_count">{props.numberOfItems}</span>
          {props.name}
        </h1>
        <AddIcon className='icon_Add'></AddIcon>
      </div>

      <Items></Items>
      <Card title="Card de ejemplo" status="done" id="1" date="05/08/2021 23:30"></Card>
    </div>
  );
}

export default Column;
