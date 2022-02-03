import React from 'react';
import { Link } from "react-router-dom";
import { Form } from './Form';
import { ListaPost } from './ListaPost';


const Wall = () => { 
return (
<div className='contenedor'>
<Link className="btnExit" to="/">Cerra Sesión</Link>
<Form />
<ListaPost />
</div>
)
}

export default Wall;