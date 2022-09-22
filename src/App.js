import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar'

function App() {


  return (
    <div className='App'>
        <NavBar />
        <ItemListContainer greeting={'Bienvenido a Calefacción Oeste'}/>
    </div>
  );
}

export default App;
