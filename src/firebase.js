import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyCNfxbbMYA1Diq9Z-Bf9WbwHXOST6WP4Sc",
    authDomain: "react-firebase-d61e5.firebaseapp.com",
    databaseURL: "https://react-firebase-d61e5.firebaseio.com",
    projectId: "react-firebase-d61e5",
    storageBucket: "react-firebase-d61e5.appspot.com",
    messagingSenderId: "501643911054"
};

firebase.initializeApp(config);
export default firebase;
// <script src="https://www.gstatic.com/firebasejs/5.5.3/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyCNfxbbMYA1Diq9Z-Bf9WbwHXOST6WP4Sc",
//     authDomain: "react-firebase-d61e5.firebaseapp.com",
//     databaseURL: "https://react-firebase-d61e5.firebaseio.com",
//     projectId: "react-firebase-d61e5",
//     storageBucket: "react-firebase-d61e5.appspot.com",
//     messagingSenderId: "501643911054"
//   };
//   firebase.initializeApp(config);
// </script>