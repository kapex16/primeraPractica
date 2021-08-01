
import './App.css';
function App() {
  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <img src=" https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png" alt="LogoNeoland" />

        <p>Version 1.0</p>

      </div>
      <div className="searchContainer">
        <p> Version 1.0</p>
        <p>Updated on 12 abr</p>
        <input type="text" placeholder="Filter cards"></input>
      </div>
      <div className="ContainerTemplate">
        <div className="cardTemplate1">
          <button>1</button>
          <p>To do</p>
          <button>+</button>
        </div>
        <div className="cardTemplate2">
          <button>1</button>
          <p>In Progress</p>
          <button>+</button>
        </div>
        <div className="cardTemplate3">
          <button>1</button>
          <p>Done</p>
          <button>+</button>
          <button>Clear All</button>
        </div>
      </div>
    </div>


  );
}

export default App;
