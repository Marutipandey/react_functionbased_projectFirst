import './App.css';
import React , {useState} from 'react';

import Navbar from './components/Navbar.js';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';


function App() {
  const [alert, setAlert] = useState(null);

  const alerttt = (message,Type)=>{
       setAlert({
        msg : message,
        type : Type
       });
       setTimeout(() =>{
        setAlert(null)
       },3000) 
      
  }
  const [mode, setMode] = useState("light");


  const removeBodyClassess= ()=>{
    document.body.classList.remove("bg-primary")
    document.body.classList.remove("bg-success")
    document.body.classList.remove("bg-danger")
    document.body.classList.remove("bg-info")


  }
  const togglemode =(cls)=>{
    removeBodyClassess()
    document.body.classList.add('bg-'+cls)
    console.log(cls)
    if (mode === 'light'){
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      alerttt("darkmode has been enabled","success");
      document.title=("my first app enable dark mode");
      setInterval(() =>{
        document.title=("enable dark mode");

      },2000)
    }else{
      setMode("light");
      document.body.style.backgroundColor = "white";
      alerttt("lightmode has been enabled","success");
      document.title=("my first appenable light mode");
      setInterval(() =>{
        document.title=("enable dark mode");

      },1500)



    }

  }

  return (
    <>
      <Navbar  homename="home"  mode={mode}  togglemode={togglemode} />
       <Alert alert={alert}  alerttt={alerttt}/>
      <div className="container">
      <Textform  mode={mode} alerttt={alerttt} heading="uppercase lowercase clearall"/>

      </div>
    </>
  );
}

export default App;
