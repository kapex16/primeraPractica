import './ColumnTodo.css';
import Items from '../componentItems/items'
import TemplateCard from '../componentCard/CardComponent'
function TodoComponent(){

    return(
        <div className="card_template cardTemplate1">

        <div className="container-todo">
          <h1 className="title-column"><span className="circle_count">1</span>To do</h1>
          <button className="button_add_task">+</button>
        </div>
        <Items></Items>
        <TemplateCard></TemplateCard>
     </div>

    )
}

export default TodoComponent;