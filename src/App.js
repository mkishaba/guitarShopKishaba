import "./styles/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemCount from './components/ItemCount';
import Items from './components/Items';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title='ItemListContainer'>
        <ItemCount stock={5} initial={2}></ItemCount>
      </ItemListContainer>
      <Items />
    </div >
  );
}

export default App;
