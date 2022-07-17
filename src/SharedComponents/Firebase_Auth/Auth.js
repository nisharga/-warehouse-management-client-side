import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCmnY44OtCxEzE1f7mJIa06UYHQNaHPqjM",
  authDomain: "ipower1.firebaseapp.com",
  projectId: "ipower1",
  storageBucket: "ipower1.appspot.com",
  messagingSenderId: "280028235282",
  appId: "1:280028235282:web:a7b7a9e130ab3a185efacb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
