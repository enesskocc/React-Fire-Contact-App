// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getDatabase, onValue, ref, set } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVuMwPMVDCIWbzd7laoQHxqlxRpioZ2wQ",
    authDomain: "fire-contact-c115d.firebaseapp.com",
    databaseURL:"https://fire-contact-c115d-default-rtdb.firebaseio.com/",
    projectId: "fire-contact-c115d",
    storageBucket: "fire-contact-c115d.appspot.com",
    messagingSenderId: "410725051805",
    appId: "1:410725051805:web:77ca974ff863682253d374"
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
