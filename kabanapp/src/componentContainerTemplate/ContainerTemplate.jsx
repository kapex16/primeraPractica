import './ContainerTemplate.css'
import TodoComponent from '../componentTodo/ColumnTodo'
import InProgress from '../componentInProgress/InProgress';
import TemplateDone from '../componentDone/Done';


function TemplateContainer() {
  return (
    <div className="ContainerTemplate">
    
      <TodoComponent></TodoComponent>
      <InProgress></InProgress>
      <TemplateDone></TemplateDone>
    </div>
  );
}
export default TemplateContainer;
