import './HeaderTemplate.css';
import aling from '../../asset/align-left_ok.png'

function TemplateHeader(){
  const currentDay = new Date();
  const monthNumber = (new Date().getMonth());
  let monthNames = ["Jan", "Feb", "March", "Apr", "May", "June", "July", "Aug", "Sept", "October", "Nov", "Dec"];
  let monthName = monthNames[monthNumber];
    return(
        <div className="mainContainer">
        <div className="headerContainer">
          <img className="headerLogo" src=" https://www.neoland.es/hubfs/favicon%20neoland-02-02-02.png" alt="LogoNeoland" />
          <p className="headerText"><img  className="logo_Version" alt="icm" src={aling}></img>Version 1.0</p>
        </div>
        
        <div className="searchContainer">
          <div className="info">
            <p><b>Version 1.0</b></p>
            <p>Updated on {currentDay.getDate()} {monthName}</p>
          </div>
          <div className="filter">
            <input className="Iput-src" type="text" placeholder="Filter cards"/>
          </div>

        </div>
      </div>
  
  );
}

export default TemplateHeader;
