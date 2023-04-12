
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message,type)=>
  {
    setAlert(
    {msg: message,
      type: type}
    )

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#001269';
      showAlert('Dark mode is set!',"success");
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode is set!',"success");
    }
  }

  return (
    <>
    <Navbar title="My App" mode = {mode} togmod = {toggleMode} func={showAlert}/>
    <Alert alert={alert}/>
    <Textbox mode = {mode} func={showAlert}/>

    {/* <About /> */}
    </>
  );
}

export default App;
