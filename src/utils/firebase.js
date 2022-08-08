// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase, onValue, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    databaseURL: process.env.REACT_APP_databaseURL
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const db = getDatabase(app);
console.log(db);


// const distanceRef = ref(db, "users/" + userId + '/distance');
// onValue(distanceRef, (snapshot) => {
//   const data = snapshot.val();
//   updateDistance(postElement, data);
// });

// function writeUserData(userId, name, number, gender ) {
// const reference = ref(db, "users/" + userId)
// set(reference, {
//     username : name,
//     phonenumber: number,
//     gender: gender
// });
// }

// writeUserData("enes", "koc", "enes@hotmail.com", "male")
