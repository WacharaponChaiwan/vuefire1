import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import"bootstrap/dist/css/bootstrap.css";
import"bootstrap/dist/js/bootstrap.js";
//import "./assets/main.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcrrTngB4IZ13lzQEMQysIj-Dur5b0AiE",
  authDomain: "fir-38f90.firebaseapp.com",
  projectId: "fir-38f90",
  storageBucket: "fir-38f90.appspot.com",
  messagingSenderId: "169346732136",
  appId: "1:169346732136:web:8798b357b62920b636ebdd",
  measurementId: "G-225F9HBXMJ"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);

const app = createApp(App);

app.use(router);

app.mount("#app");
