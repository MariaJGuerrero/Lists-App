import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import List from './pages/list';
import ListsMenu from './pages/list';
import { getLists, postList } from "./services/lists";
import contextLists from "./utils/context";

function App() {

  const [allTheLists, setAllTheLists] = useState([])
  useEffect(()=> {
    getLists().then((r)=> {setAllTheLists(r)})
  }, [])

  //postList().then((r)=>{console.log('respuesta POST', r)})

  return (
    <div className="App">
      <contextLists.Provider value= {{ allMyLists: allTheLists}}>
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
