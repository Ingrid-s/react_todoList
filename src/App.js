import React from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Taskview from './Pages/Taskview'
import Header from './Components/Header'



function App() {
  return (
    <React.Fragment>
   
      <Header />
      <Taskview />
     
    </React.Fragment>
  );
}

export default App;
