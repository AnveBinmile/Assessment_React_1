import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';

function App() {
  return (
    <div className="App mx-auto w-5/6 flex flex-col gap-[50px]">
     <Navbar/>
     <Mainpage/>
    </div>
  );
}

export default App;
