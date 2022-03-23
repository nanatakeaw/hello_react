import './App.css';
import ListEmployeeComponent from './component/ListEmployeeComponent';
import SearchTest from './test/search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <div>
      <Router>
        <div className="container">
          <Routes>
            <Route path="/" element={<ListEmployeeComponent />}></Route>
            <Route path="/search" element={<SearchTest />}></Route>
          </Routes>
        </div>
      </Router>
    </div>




    // <div className="App">
    //   <SearchTest SearchTest />
    // </div> 
  );
}

export default App;
