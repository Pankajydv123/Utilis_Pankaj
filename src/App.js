import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState('light') ;//whether dark modde is enabled or not
  const [alert,setAlert] = useState(null) ;

  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='rgb(34 49 71)';
      showAlert("Dark Mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
  <>
  <Router>
    <Navbar title="textUtils" mode={mode} toggleMode={toggleMode}/>
    <Alert Alert={alert}/>
    <div className="container my-3">
      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Textform heading="Enter the text to  analyse" showAlert={showAlert} mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
  </>
  );
}

export default App;
