/* eslint-disable no-unused-vars */
import { createContext, useContext, useState } from "react";
import {
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";

export const RecepieContext = createContext();

export function RecepieProvider({ children }) {
  const navigate = useNavigate();

  const onGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const response = await signInWithPopup(auth, provider);

      // Ensure that response.user exists and has a uid property
      if (response.user && response.user.uid) {
        // await createUserAndAddToFirestore(response.user)
        // Use response.user.uid instead of response.uid
        alert("user login");
        navigate("/home");
      } else {
        console.error("Google sign-in failed. User data not available.");
        // message.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error(error);
      //   message.error('Something went wrong. Please try again.')
    }
  };

  const onGithubSignIn = async () => {
    try {
      const provider = new GithubAuthProvider();
      const response = await signInWithPopup(auth, provider);
      if (response.user && response.user.uid) {
        // await createUserAndAddToFirestore(response.user)
        // Use response.user.uid instead of response.uid
        alert("user login");
        navigate("/home");
      } else {
        console.error("Google sign-in failed. User data not available.");
        // message.error('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignout = async () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("token")
        localStorage.removeItem("user")
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onEmailAndPasswordSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      const user = await userCredential.user;
      localStorage.setItem("token", user.accessToken);
      localStorage.setItem("user", JSON.stringify(user));
      navigate('/home')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RecepieContext.Provider
      value={{
        onGoogleSignIn,
        onSignout,
        email,
        password,
        setEmail,
        setPassword,
        onGithubSignIn,
        onEmailAndPasswordSignIn,
      }}
    >
      {children}
    </RecepieContext.Provider>
  );
}
