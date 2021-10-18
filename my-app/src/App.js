import './App.css';
import FunctionalComponent from './MyComponents/FunctionalComponent';
import PureComponent from './MyComponents/PureComponent';
import NormalComponent from './MyComponents/NormalComponent';
import CreateElementComponent from './MyComponents/CreateElementComponent';
function App() {
  return (
    <>
    <CreateElementComponent/>
    <NormalComponent/>
    <PureComponent/>
    <FunctionalComponent/>
    </>
  );
}

export default App;
