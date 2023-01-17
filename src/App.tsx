import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home';
import List from './pages/list';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/list' element= {<List />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
