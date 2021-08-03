import './App.css';

function App() {
  return (

    <div className="mainContainer">
      <div className="headerContainer">
        <img className="headerLogo" src=" https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png" alt="LogoNeoland" />
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-kanban" viewBox="0 0 16 16">
          <path d="M13.5 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h11zm-11-1a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2h-11z" />
          <path d="M6.5 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm-4 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3zm8 0a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3z" />
        </svg>
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
        </div>


        <div className="card_template cardTemplate2">
          <div className="container-progress">
            <h1 className="title-column"><span className="circle_count">1</span>In Progress</h1>
            <button className="button_add_task">+</button>
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



        </div>
      </div>
    </div>

  );
}

export default App;
