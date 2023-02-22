import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { List, UpdateListsFunction } from "./models/list";
import Home from './pages/home';
import SingleListView from "./pages/single-list-view";
import { getLists } from "./services/lists";


function App() {

  const [allTheLists, setAllTheLists] = useState<List[]>([])
  useEffect(()=> {
    getLists().then((r)=> {setAllTheLists(r)})
  }, [])

  /*const addList:UpdateListsFunction = (newList: List) => {
    const listAdded = [...allTheLists, newList]
    setAllTheLists(listAdded)
  }*/

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element= {<Home lists={allTheLists}/>} />
            <Route path='/SingleListView/:id' element= {<SingleListView lists={allTheLists}/>} />
            <Route path='/SingleListView' element= {<SingleListView lists={allTheLists} />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
