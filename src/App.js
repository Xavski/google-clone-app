import "./App.css";
import React from "react";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/search' element={<SearchPage/>}/>
          <Route path="/" element={<Home />} />
          {/* Home (the one with the search bar) */}

          {/* Search Page (the results page) */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
