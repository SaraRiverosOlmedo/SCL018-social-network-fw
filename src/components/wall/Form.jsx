import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase";
import  {useState} from 'react'
import './wali.css';

export const Form = () => {
  const [post, cambiarPost] = useState('');

//   const getDate = () => {
//     const hoy = new Date();
//     const fecha = `${hoy.getDate()} - ${(hoy.getMonth() + 1)} - ${hoy.getFullYear()}`;
//     const hora = `${hoy.getHours()}:${hoy.getMinutes()}:${hoy.getSeconds()}`;
//     const fechaYHora = `Fecha: ${fecha} - Hora: ${hora}`;
//     return fechaYHora;

//   };

const addDataPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'postFw'), {
        description: post,
      });
      console.log('Document written with ID: ');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
    cambiarPost('');
  };
    return (
            <>
    <form className="formulario"
    action=""
    onSubmit={addDataPost}>
    <input className= "input" 
    type="text" 
    value={post} 
    onChange={(e) => cambiarPost(e.target.value)} 
    placeholder=''
    />
    <button className= "boton" 
    type='submit'>Publicar</button>
    </form>
        </>
    )
}
