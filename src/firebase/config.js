import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBW0RdFtVHwiQJvOIrfMpX5aoyhDQ6uUqU",
  authDomain: "endlessdemands-48ddc.firebaseapp.com",
  projectId: "endlessdemands-48ddc",
  storageBucket: "endlessdemands-48ddc.appspot.com",
  messagingSenderId: "602997578763",
  appId: "1:602997578763:web:ec071e232958671075bb0e",
  measurementId: "G-L89BRPVJL9"
};

initializeApp(firebaseConfig);

const db = getFirestore()

export { db }
