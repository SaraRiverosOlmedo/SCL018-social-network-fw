import {useState, useEffect} from 'react';
import { db }  from '../../firebase';
import { UpdatePost } from './UpdatePost';
import { collection, onSnapshot } from 'firebase/firestore';

export const ListaPost = () => {
    const [lista, nuevaLista] = useState([]);
    
    useEffect(() => {
    console.log("funcionando");
    onSnapshot(collection(db, 'postFw'),
     (snapshot) => {
      const arregloPost = snapshot.docs.map((documento) => {
          return {...documento.data(), id: documento.id}
      })
      nuevaLista(arregloPost);
      }
      );
    }, []);
   
    
    return (
        <div className='contenedor'>
          {lista.map((post) => (
              <UpdatePost 
              key={post.id}
              id={post.id}
              description={post.description}
              />
          ))}  
        </div>
    )
}
// /* <UpdatePost 
// key={elemento.id}
// userName={elemento.userName}
// description={elemento.description}
// datePost={elemento.datePost}
// // />