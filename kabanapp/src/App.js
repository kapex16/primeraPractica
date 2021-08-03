import './App.css';
import { Delete,RadioButtonChecked} from '@material-ui/icons';
// import {} from '@material-ui/icons/RadioButtonChecked';

function App() {
  return (

    <div className="mainContainer">
      <div className="headerContainer">
        <img className="headerLogo" src=" https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png" alt="LogoNeoland" />

        <p className="headerText">Version 1.0</p>
      </div>
      <div className="searchContainer">
        <div className="info">
          <p><b>Version 1.0</b></p>
          <p>Updated on 12 abr</p>
        </div>
        <div className="filter">
          <input type="text" placeholder="Filter cards"></input>
        </div>
      </div>

      <div className="ContainerTemplate">
        <div className="card_template cardTemplate1">
          <div className="container-todo">
            <h1 className="title-column"><span className="circle_count">1</span>To do</h1>

            <button className="button_add_task">+</button>
          </div>
          {/* Este div seria la cajita para escribir las notas que vamos a agregar */}
          <div className="box-add-card">
            <textarea className="input_box" type="text" placeholder="Enter a note"></textarea>
            <div className="container-button-note">
              <button className="button-add-note">Add</button>
              <button className="button-cancel-note">Cancel</button>
            </div>
          </div>
          <div class="tasks-box">
            <i class="to-do-icon finished-icon icon">
            </i>
            <RadioButtonChecked className="to-do-icon" ></RadioButtonChecked>
            <Delete class="trashcan"></Delete>
            <p className="task-title">
              titulo de tarea
            </p>
            <p class="task-info">
              info de tarea
            </p>
          </div>
          
        </div>



        <div className="card_template cardTemplate2">

          <div className="container-progress">
            <h1 className="title-column"><span className="circle_count">1</span>In Progress</h1>
            <button className="button_add_task">+</button>
          </div>
          <div className="box-add-card">
            <textarea className="input_box" type="text" placeholder="Enter a note"></textarea>
            <div className="container-button-note">
              <button className="button-add-note">Add</button>
              <button className="button-cancel-note">Cancel</button>
            </div>
            </div>
        </div>

        <div className="card_template cardTemplate3">
          <div className="container-done">
            <h1 className="title-column"><span className="circle_count">1</span>Done</h1>
            <div className="container_button_done">
              <button className="button_add_task">+</button>
              <button>Clear All</button>
            </div> 
          </div>

          <div className="box-add-card">
            <textarea className="input_box" type="text" placeholder="Enter a note"></textarea>
            <div className="container-button-note">
              <button className="button-add-note">Add</button>
              <button className="button-cancel-note">Cancel</button>
            </div>
            </div>

        </div>
      </div>
    </div>

  );
}

export default App;
