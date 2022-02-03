import {useState} from 'react'
import { db } from '../../firebase';
import { doc, updateDoc } from "firebase/firestore";
import './wali.css';


export const UpdatePost = ({id, description }) => {
   const [editandotarea, cambiarEditandoTarea] = useState(false);
   const [editDescription, cambiarEditDescription] =useState(description);

   const actualizarData = async(e) => {
      e.preventDefault();
      console.log('actualizando');
        try { 
            await updateDoc(doc(db, 'postFw', id), {
                description: editDescription,
              });
        } catch (error){
            console.log('hubo un error al actualizar')
            console.log(error);
        } 
   
    cambiarEditandoTarea(false);
   }
    return (
        <div className='user-post'>
            {editandotarea ?
            <form action="" onSubmit={actualizarData}>
                <input
                 className='input'
                 type="text"
                 name='descripcion'
                 value={editDescription}
                 onChange={(e) => cambiarEditDescription(e.target.value)}
                  />
                  <button type= 'submit'>Actualizar</button>
            </form>
            :
            <>
            <p>{description}</p>
            <button onClick={() => cambiarEditandoTarea(!editandotarea)}>Editar</button>
            <button>Borrar</button>
            </>
            }
        </div>
    )
}
