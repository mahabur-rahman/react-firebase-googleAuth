import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC1rC3XP9g09yXe38pSxZ_Pl7wHMVctJQ4",
  authDomain: "auth-c7c13.firebaseapp.com",
  projectId: "auth-c7c13",
  storageBucket: "auth-c7c13.appspot.com",
  messagingSenderId: "102227623122",
  appId: "1:102227623122:web:0eba98bd69a136adcb410b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

// after btn click this func works
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((err) => {
      console.log(err);
    });
};
