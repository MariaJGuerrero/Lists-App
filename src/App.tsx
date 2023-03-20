import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import './App.css';
import { appContext } from "./context/app-context";
import { List, UpdateListsFunction } from "./models/list";
import Home from './pages/home';
import LoginPage from "./pages/login";
import SingleListView from "./pages/single-list-view";
import { getLists } from "./services/lists";


function App() {

  const [allTheLists, setAllTheLists] = useState<List[]>([])
  

  const addList:UpdateListsFunction = (newList: List) => {
    const listAdded = [...allTheLists, newList]
    setAllTheLists(listAdded)
  }

  const modifyList: UpdateListsFunction = (newList: List) => {
       const newAllTheLists = allTheLists.map((list)=> list._id === newList._id 
      ? newList 
      : list
    )
    setAllTheLists(newAllTheLists)
  }

  
  const removeList = (listId: string) => {
    const allTheListsUpdate = allTheLists.filter((list)=> list._id !== listId)
    console.log(allTheListsUpdate)
    setAllTheLists(allTheListsUpdate)
   
  }

  return (
    <div className="App">
        <Router>
          <appContext.Provider 
            value={{
              lists: allTheLists, 
              addList, 
              modifyList, 
              removeList, 
              setLists: setAllTheLists
            }}>
          <Routes>
            <Route path='/' element= {<Home />} />
            <Route path='/login' element= {<LoginPage />} />
            <Route 
              path='/SingleListView/:id' 
              element= {<SingleListView />} 
            />
            <Route 
              path='/SingleListView' 
              element= {<SingleListView />} 
            />
          </Routes>
          </appContext.Provider>
        </Router>
    </div>
  );
}

export default App;
