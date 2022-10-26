// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHwU1g-ZFkbMMCGI_yh9M3BJ1ydFTC1A4",
  authDomain: "programming-web.firebaseapp.com",
  projectId: "programming-web",
  storageBucket: "programming-web.appspot.com",
  messagingSenderId: "826937609336",
  appId: "1:826937609336:web:e89a8e1b688c14811a718d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;