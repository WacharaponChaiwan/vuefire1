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
  apiKey: "AIzaSyCac3O28pi9hQRJloRvsa2qZpEixDGSrwY",
  authDomain: "lab-vuefire.firebaseapp.com",
  projectId: "lab-vuefire",
  storageBucket: "lab-vuefire.appspot.com",
  messagingSenderId: "418448307906",
  appId: "1:418448307906:web:fb1f111cb5208aef526d5b"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);

export const db = getFirestore(initFirebase);

const app = createApp(App);

app.use(router);

app.mount("#app");
