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

  const addList:UpdateListsFunction = (newList: List) => {
    const listAdded = [...allTheLists, newList]
    setAllTheLists(listAdded)
    console.log('lista añadida a allthelists', listAdded)
  }

  const modifyList: UpdateListsFunction = (newList: List) => {
       const newAllTheLists = allTheLists.map((list)=> list._id === newList._id 
      ? newList 
      : list
    )
    setAllTheLists(newAllTheLists)
  }

  const removeList = (listId: string) => {
    const allTheListsUpdate = allTheLists.filter((list)=> list._id === listId)
    setAllTheLists(allTheListsUpdate)
    console.log('listado actualizado despues delete', allTheLists)
  }

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path='/' element= {<Home lists={allTheLists}/>} />
            <Route 
              path='/SingleListView/:id' 
              element= {
                <SingleListView 
                  addListFunction={addList} 
                  removeListFunction={removeList}
                  modifyListFunction={modifyList} 
                />
              } 
            />
            <Route 
              path='/SingleListView' 
              element= {
                <SingleListView 
                  addListFunction={addList} 
                  removeListFunction={removeList} 
                  modifyListFunction={modifyList}
                />
              } 
            />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
