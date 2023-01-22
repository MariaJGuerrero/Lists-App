import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import List from './pages/list';
import ListsMenu from './pages/list';
import contextLists from "./utils/context";

function App() {
  return (
    <div className="App">
      <contextLists.Provider value= {{ allMyLists: [], updateAllMyLists: ([]) => {}}}>
        <Router>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/listsMenu' element= {<ListsMenu />} />
          </Routes>
        </Router>
      </contextLists.Provider>
    </div>
  );
}

export default App;
