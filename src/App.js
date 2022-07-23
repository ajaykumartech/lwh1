import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
//import About from './components/About';
import Alert from './components/Alert';


function App() {
  const [mode,setMode]= useState('light');
  const [alert,setAlert]= useState(null);

  const showAlert =(message, type)=> {
  setAlert({
    msg: message,
    type:type
  })
  setTimeout( ()=> {
setAlert(null)
  },3000)
  }

  const toggleMode = () =>{                     
        if(mode ==='light'){
          setMode('dark')
          document.body.style.backgroundColor='#042743';
          showAlert("Dark mode has been enabled","success");
          document.title='TextUtils - Dark mode';
          setInterval( ()=>{
            document.title = 'TextUtils is amazing mode';
          },2000);
          
        }
        else{
          setMode('light')
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success");
        document.title='TextUtils - light mode';
        setInterval( () => {
          document.title= 'Install TextUtils Now';
        },1500)
        }
  }
  return (
    <>
       <Navbar title="AjayHarry" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode} /> 
       <Alert alert={alert}/>
            <div className="container my-3">
       <TextForm  showAlert= {showAlert} heading="Enter the text-to-analyze-below" mode={mode}/>
       {/* <About/> */}
       </div>
        </>
  );
}

export default App;
  