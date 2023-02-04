import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { List, UpdateListsFunction } from "./models/list";
import Home from './pages/home';
import SingleListView from "./pages/single-list-view";
import ListsMenu from './pages/lists-menu';
import { getLists } from "./services/lists";
import contextLists from "./utils/context";

function App() {

  const [allTheLists, setAllTheLists] = useState<List[]>([])
  useEffect(()=> {
    getLists().then((r)=> {setAllTheLists(r)})
  }, [])

  const updateLists:UpdateListsFunction = (newList: List) => {
    const updatedLists = [...allTheLists, newList]
    setAllTheLists(updatedLists)
  }

  return (
    <div className="App">
      <contextLists.Provider value= {{ allMyLists: allTheLists, updateLists }}>
        <Router>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/listsMenu' element= {<ListsMenu />} />
            <Route path='/SingleListView/:id' element= {<SingleListView />} />
          </Routes>
        </Router>
      </contextLists.Provider>
    </div>
  );
}

export default App;
