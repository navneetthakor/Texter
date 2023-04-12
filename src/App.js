
import './App.css';
// import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#393f86';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
    <Navbar title="My App" mode = {mode} togmod = {toggleMode}/>
    {/* <Alert/> */}
    <Textbox mode = {mode}/>

    {/* <About /> */}
    </>
  );
}

export default App;
