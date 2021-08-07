import "./HeaderTemplate.css";

function TemplateHeader(props) {
  return (
    <div className="mainContainer">
      <div className="headerContainer">
        <img
          className="headerLogo"
          src=" https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png"
          alt="LogoNeoland"
        />
        <p className="headerText">Version 1.0</p>
      </div>

      <div className="searchContainer">
        <div className="info">
          <p>
            <b>Version 1.0</b>
          </p>
          <p>{props.updatedLast}</p>
        </div>
        <div className="filter">
          <input type="text" placeholder="Filter cards"></input>
        </div>
      </div>
    </div>
  );
}

export default TemplateHeader;
