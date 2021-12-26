import './App.css';
import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Start from './components/start.jsx';
import Profile from "./components/profile.jsx";

function App() {
  
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path = '/' element = {<Start/>}/>
          <Route exact path = '/profile' element = {<Profile/>}/>
        </Routes>
      </div>
    </BrowserRouter>    
  );
}

export default App;
