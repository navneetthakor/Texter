
import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textbox from './components/Textbox';

function App() {
  return (
    <>
    <Navbar title="My App" />
    <Alert/>
    <Textbox />

    {/* <About /> */}
    </>
  );
}

export default App;
