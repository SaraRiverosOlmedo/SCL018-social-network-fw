import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login/Login';
import Wall from './components/wall/Wall';
import './App.css'

  const App = () => {
    return (
      <>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/Wall" element={<Wall />}/>
      </Routes>
    </Router> 
    </>
);
}

export default App;
// const [sesion, cambiarEstadoSesion]= useState(false);
// /  <div className='contenedor'>
// {sesion === true ?
// <div>
// <button onClick={()=> cambiarEstadoSesion(false)}>Cerrar Sesión</button>
// </div>
// :
// <div>
// <Login cambiarEstadoSesion ={cambiarEstadoSesion} />
// </div>
// }
// </div>