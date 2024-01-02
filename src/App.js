import React from 'react';
import './App.css';
import Side from "./components/Side";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="App">
      <div className='app-body'>
        <Side />
        <Chat />
      </div>
    </div>
  );
}

export default App;
