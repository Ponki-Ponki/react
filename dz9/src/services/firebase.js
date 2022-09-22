import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDvic2OEzHz9EeDmQxs1jKtf0HBevthCBw",
  authDomain: "fir-dz9.firebaseapp.com",
  projectId: "fir-dz9",
  storageBucket: "fir-dz9.appspot.com",
  messagingSenderId: "500915505516",
  appId: "1:500915505516:web:9acdc1f994ee6b1525cb49"
};

const appFire = firebase.initializeApp(firebaseConfig);
// export const db = appFire.database().ref();
export const auth = firebase.auth();
