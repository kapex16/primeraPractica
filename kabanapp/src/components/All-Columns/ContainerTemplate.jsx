import Column from "../Columns/ColumnTodo";
import "./ContainerTemplate.css";

function TemplateContainer() {
  return (
    <div className="ContainerTemplate">
      <Column name="To do" numberOfItems=""></Column>
      <Column name="In Progress" numberOfItems=""></Column>
      <Column name="Done" numberOfItems=""></Column>
    </div>
  );
}

export default TemplateContainer;
