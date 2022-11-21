import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDEKi7L8UzOj-NfnaPT45Ib_L-EEIAZOYk",
  authDomain: "unshelled-blog.firebaseapp.com",
  projectId: "unshelled-blog",
  storageBucket: "unshelled-blog.appspot.com",
  messagingSenderId: "412173729075",
  appId: "1:412173729075:web:e18bf3dc6bd16eafcb5246",
  measurementId: "G-L1LWRBNVTM"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };


  