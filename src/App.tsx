import React from 'react';
import './App.css';

import MyButton from './components/Button';
import Forms from './components/Forms';


function App() {
  return (
    <div className="App">
    <MyButton onClick={() => alert("Not Done")} text="Click ME" />
    <br></br> 
    <Forms /> 
    </div>
  );
}

export default App;
