import '../Column/Column.css';
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
        <div>
        <AddIcon className='icon_Add'></AddIcon>
        {props.clearall ? <button className="button-clear-all">clear all</button> : ''}
        </div>
      </div>
      <div className="container_cards">
      <Items></Items>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      <Card title="Creación del CI/CD para el frontal" status={props.status} id="23" date="20/05/20"></Card>
      </div>
    </div>
  );
}

export default Column;
