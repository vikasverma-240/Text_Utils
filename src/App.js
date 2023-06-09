import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success")

      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';

      showAlert(" light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'
    }
  }
  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      {/* <Navbar/> */}
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
        </div>
      </>
      );
}

      export default App;