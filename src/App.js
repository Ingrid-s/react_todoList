import React from 'react';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Components/Header'
import ToDoForm from './Components/ToDoForm'

function App() {
  return (
    <React.Fragment>
   
      <Header />
      <ToDoForm />
     
    </React.Fragment>
  );
}

export default App;
