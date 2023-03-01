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
  apiKey: "AIzaSyBVi7vOC3kRFBhHJh5XBhxfKyhMBS0GUjE",
  authDomain: "fir-b74e6.firebaseapp.com",
  projectId: "fir-b74e6",
  storageBucket: "fir-b74e6.appspot.com",
  messagingSenderId: "167103138626",
  appId: "1:167103138626:web:01d7734651d0872f8716db",
  measurementId: "G-4Q5VNLNTD6"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);

const app = createApp(App);

app.use(router);

app.mount("#app");
