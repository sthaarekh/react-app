import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import Alert from './Components/Alert';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';
function App() {
  const [mode, setMode] = useState('light') //whether darkmode is enabled or not\
  const [alert, setAlert] = useState(null) 

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    },1500);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled","sucess")
    }
    else{
      setMode('light')
      document.body.style.color = 'black';
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","sucess");

    }
  }
  return (
    <>

    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}></Alert>
    <div className="container">
      <Textform showAlert={showAlert} heading="Enter the text to analyze" />
    </div>
    {/* <Router> */}
      {/* <Routes>
      <Route exact path="/" element={<div className="container"><Textform showAlert={showAlert} heading="Enter the text to analyze" /></div>} />
      <Route exact path="/about" element={<div className="container"><About/></div>}/>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
