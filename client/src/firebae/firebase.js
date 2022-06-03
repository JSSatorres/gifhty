// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
  signOut,
  // sendPasswordResetEmail,
  // updatePassword,
  // reauthenticateWithCredential,
  // EmailAuthProvider,
} from "firebase/auth";

// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);


export async function singInWithEmailAndPassword(email, password) {
  await signInWithEmailAndPassword(auth, email, password);
}

export async function singUpWithEmailAndPassword(email, password) {
  await createUserWithEmailAndPassword(auth, email, password);
}

export async function userSignOut() {
  return await signOut(auth);
}
// export function singInWithGoogle() {
//   const Provider = new GoogleAuthProvider();
//   return signInWithPopup(auth, Provider);
// }

// export function userSendPasswordResetEmail(email) {
//   return sendPasswordResetEmail(auth, email);
// }

// export function getCurrentUserToken() {
//   if (!auth.currentUser) {
//     return null;
//   }

//   return auth.currentUser.getIdToken();
// }

// export function getCurrentUserEmail() {
//   if (!auth.currentUser) {
//     return null;
//   }

//   return auth.currentUser.email;
// }

// export function changePassword(newPassword) {
//   const auth = getAuth();

//   const user = auth.currentUser;
//   console.log(user);
//   console.log(newPassword);
//   updatePassword(user, newPassword)
//     .then(() => console.log("contraseña cambiada"))
//     .catch(() => console.log("contraseña no cambiada"));
// }

// export async function reauthenticate(password) {
//   const user = auth.currentUser;
//   const credential = EmailAuthProvider.credential(
//     auth.currentUser.email,
//     password
//   );
//   return reauthenticateWithCredential(user, credential);
// }
