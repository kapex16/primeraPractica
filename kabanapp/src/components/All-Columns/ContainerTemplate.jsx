import Column from "../Column/Column";
import "./ContainerTemplate.css";

function TemplateContainer() {
  return (
    <div className="ContainerTemplate">
      <Column name="To do" numberOfItems="" status='undone'></Column>
      <Column name="In Progress" numberOfItems="" status='undone'></Column>
      <Column name="Done" numberOfItems="" clearall={true} status='done'></Column>
    </div>
  );
}

export default TemplateContainer;
