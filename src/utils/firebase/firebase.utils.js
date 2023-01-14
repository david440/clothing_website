import { initializeApp } from 'firebase/app'; 
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore' //getDoc, setDoc = Getting the document data and setting the document data


const firebaseConfig = {
    apiKey: "AIzaSyBAXu7p5PoL7jzkNgztrKEL58DIbzUlzD8",
    authDomain: "crwn-clothing-db-b71cb.firebaseapp.com",
    projectId: "crwn-clothing-db-b71cb",
    storageBucket: "crwn-clothing-db-b71cb.appspot.com",
    messagingSenderId: "760314883331",
    appId: "1:760314883331:web:3b76970528573e51e3cd36"
  };
  

  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider(); //GoogleAuthProvider is a class that we get from Firebase authentication and this is connected with Google Auth itself.  There are many other providers like Facebook, Github etc. 
  
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const sigInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const sigInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
    if(!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid); //User document reference

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef); //The snapshot allows us to check whether not there's an instance that exists inside of the DB and also allows us to access the data.
    console.log(userSnapshot);
    console.log(userSnapshot.exists()); //Check if reference and the data that poionted by this reference is exists in DB.

    //if user data does not exist create / set the document with the data from userAuth in my collection
    if(!userSnapshot.exists()){
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error){
            console.log('error creating the user', error.message);
        }
    }

    return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);
  }
