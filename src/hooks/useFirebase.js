import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile} from "firebase/auth";
import initializeFirebase from "../components/Firebase/firebase.init";


//initialize Firebase app
initializeFirebase();
const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) =>{
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
             setAuthError('');
             const newUser = {email, displayName: name};
             setUser(newUser);
             // save user to the database
             saveUser(email, name, 'POST');
              // send name to firebase after creation
             updateProfile(auth.currentUser, {
              displayName: name
            }).then(() => {
            }).catch((error) => {
            });
             history.replace('/login');
          })
          .catch((error) => {
            setAuthError(error.message);
          })
          .finally( () => setIsLoading(false));
        }

   const loginUser =  (email, password, location, history) =>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const destination = location?.state?.from || '/';
            history.replace(destination);
            setAuthError('');
    })
    .catch((error) => {
      setAuthError(error.message);
    })
    .finally( () => setIsLoading(false));
   } 

   const signInWithGoogle = (location, history) =>{
      setIsLoading(true);
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          saveUser(user.email, user.displayName, 'PUT');
          setAuthError('');
          const destination = location?.state?.from || '/';
          history.replace(destination);
        }).catch((error) => {
          setAuthError(error.message);
    })
    .finally( () => setIsLoading(false));
 }


 //observer user state
    useEffect( ()=>{
      const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
             setUser(user);
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    }, [auth])

    
    useEffect(() =>{
      fetch(`https://morning-ravine-75355.herokuapp.com/user/${user.email}`)
      .then(res =>res.json())
      .then(data => setAdmin(data))
    }, [user.email])

    const logOut = () =>{
        setIsLoading(true);
        signOut(auth).then(() => {
        // Sign-out successful.
        window.location.reload()
        }).catch((error) => {
        // An error happened.                                                                   
        })
        .finally( () => setIsLoading(false));
    }

    const saveUser = (email, displayName, method) => {
      const user = {email, displayName};
      fetch('https://morning-ravine-75355.herokuapp.com/users',{
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
      .then()
    }

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        signInWithGoogle,
        loginUser,
        logOut,
    }
}
export default useFirebase;