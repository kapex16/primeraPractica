import { Divider } from '@material-ui/core';
import './App.css';
import TemplateContainer from './componentContainerTemplate/ContainerTemplate.jsx';
import TemplateHeader from './componentHeader/HeaderTemplate';

function App() {
  return (
    <div>
    <TemplateHeader></TemplateHeader>
    <TemplateContainer></TemplateContainer>
    </div>
  );
}

export default App;
