import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAzaJPHu2dvLF10FyWzGfIcXROT9Ex3-sA",
  authDomain: "netflix-clone---tamiloffc.firebaseapp.com",
  projectId: "netflix-clone---tamiloffc",
  storageBucket: "netflix-clone---tamiloffc.firebasestorage.app",
  messagingSenderId: "503806026258",
  appId: "1:503806026258:web:4bac9f2f12c7e58f6beecb",
  measurementId: "G-VW5K9Z9W1E"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const user = res.user;
      await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
         authProvider: "local",
        email,
      })
    } catch(error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join("  "));

      }
    }

 const login = async(email, password)=>{
    try {
      signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error)
      toast.error(error.code.split('/')[1].split("-").join(" "))
    } 
  }
 const logout =()=>{
    signOut(auth);

 }

 export {auth, db, login, signup, logout};