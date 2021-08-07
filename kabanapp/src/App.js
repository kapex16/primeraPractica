// import { Divider } from '@material-ui/core';
import TemplateContainer from './components/All-Columns/ContainerTemplate';
import './App.css';
import TemplateHeader from './components/Header/HeaderTemplate';

function App() {
  return (
    <div>
      <TemplateHeader updatedLast=" "></TemplateHeader>
      <TemplateContainer></TemplateContainer>
    </div>
  );
}

export default App;
