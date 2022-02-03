import { initializeApp } from "firebase/app";
import { getFirestore,} from "firebase/firestore";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-librariesfirebase init
const firebaseConfig = {
    apiKey: "AIzaSyCl8s5hPo4pXyT-d8qDIWx89NaOMzz7edM",
    authDomain: "estudiando-fw.firebaseapp.com",
    projectId: "estudiando-fw",
    storageBucket: "estudiando-fw.appspot.com",
    messagingSenderId: "969529363163",
    appId: "1:969529363163:web:cd1e82331846e89ca95afe",
    measurementId: "G-5FQYX4QFD2"
  };
  export const login = (email, password) => {
    if (email === '' || password === '') {
      alert('Email o contraseña no ingresados');
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log('Pajarón');
        });
    }
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const db = getFirestore();
//Funcion para loguear con google
export const googleLogin = () => {
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
};
//agregar data
