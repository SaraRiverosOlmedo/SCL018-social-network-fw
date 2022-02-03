import {useState} from "react";
// import { signInWithEmailAndPassword } from "firebase/auth";
import { googleLogin } from "../../firebase";
import { Link } from "react-router-dom";
import './login.css';

const Login = () =>{
    const [email, cambiarEmail] = useState('');
    const [password, cambiarPassword] = useState('');

const onSubmit = (e) =>{
    // console.log("enviando");
    // if (email === '' || password === '') {
    //     alert('Email o contraseña no ingresados');
    //   } else {
    //     signInWithEmailAndPassword(auth, email, password)
    //       .then((userCredential) => {
    //         // Signed in
    //         const user = userCredential;
    //         // ...
    //       })
    //       .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         console.log('Pajarón');
    //       });
    //   }
    // };
    e.preventDefault();
    googleLogin();
    if(email === '' && password === ''){
        // this.props.cambiarEstadoSesion(true);
    }else{
        alert('Datos incorrectos!');
        cambiarEmail('');
        cambiarPassword('');
    }

}
   return (
       <form action="" onSubmit={onSubmit} className="formulario">
           <div>
               <label htmlFor="usuario" className="label">Ingresa Usuario</label>
               <input 
                 type="text"
                 name=""
                 id="" 
                 value={email}
                onChange={(e) => cambiarEmail(e.target.value)} 
                 className="input" 
               />
           </div>
           <div>
               <label htmlFor="password" className="label">Ingresa Contraseña</label>
               <input 
                 type="password"
                 name=""
                 id="" 
                 value={password}
                 onChange={(e) => cambiarPassword(e.target.value)} 
                 className="input" 
               />
           </div>
           <button className="boton" type="submit">Google</button>
           <p>o</p>
        <div className="button-Google">
        <Link className="btnGoogle" to="/Wall">Google</Link>
    </div>
    </form>
    );
}
export default Login; 