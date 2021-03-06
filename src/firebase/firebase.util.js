import { initializeApp } from 'firebase/app';
import{ getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDf0yZEn1GzJd3WFIVS0bdFzlsENFpH1jY",
    authDomain: "crwn-db-fb3b2.firebaseapp.com",
    projectId: "crwn-db-fb3b2",
    storageBucket: "crwn-db-fb3b2.appspot.com",
    messagingSenderId: "390812011235",
    appId: "1:390812011235:web:a87839bba31c8a150493d6",
    measurementId: "G-HXFNNRYD79"
}

// firebase.initializeApp(config);

// export const auth = firebase.auth();
// export const firestore = firebase.firestore();

// const provider = new firebase.auth.GoogleAuthProvider();
// provider.setCustomParameters({prompt: 'select_account'});

// export const sinInWithGoogle = () => auth.sinInWithPopup(provider);

// export default firebase;

initializeApp(config);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({params: 'select_account'});


export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfileDocument = async (userAuth, additionalData) =>{
    
    if(!userAuth) return;
    
    const userRef = doc(firestore, `users/${userAuth.uid}`)
    
    const snapShot = await getDoc(userRef);

    if(!snapShot.exists){
        const { displayName, email } = userAuth
        const createdAt = new Date()
     
        try {
          await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData,
          })
        } catch (error) {
          console.log('Error creating user ', error.message)
        }
    }

    return userRef;
}