import firebase from 'firebase/app'
import  'firebase/storage'
import  'firebase/firestore'
import  'firebase/database'



// const firebaseConfig = {
//     apiKey: "AIzaSyDn1QRN-35KyIScNEQ3sMD0Z9WApq2y66w",
//     authDomain: "fire-goo-55f96.firebaseapp.com",
//     projectId: "fire-goo-55f96",
//     storageBucket: "fire-goo-55f96.appspot.com",
//     messagingSenderId: "665649498099",
//     appId: "1:665649498099:web:ab0ed1cbeeda46530d7486"
//   };
  const firebaseConfig = {
    apiKey: "AIzaSyDO4YwBMNzDfCJg1YTj5cCXyGAdKImoStE",
    authDomain: "hero-tu.firebaseapp.com",
    databaseURL: "https://hero-tu-default-rtdb.firebaseio.com",
    projectId: "hero-tu",
    storageBucket: "hero-tu.appspot.com",
    messagingSenderId: "802551569383",
    appId: "1:802551569383:web:f948dcbd62a1e7d6fcfb42"
  };
  // const firebaseConfig = {
  //   apiKey: "AIzaSyBEtUkkhZsB3Xkbg0rhBKeDrLcF0eXwPp0",
  //   authDomain: "try-out-b84ae.firebaseapp.com",
  //   projectId: "try-out-b84ae",
  //   storageBucket: "try-out-b84ae.appspot.com",
  //   messagingSenderId: "526856679683",
  //   appId: "1:526856679683:web:839b38b1c700b21fc7b936"
  // };




  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage=firebase.storage();
  const realTime=firebase.database();
  const projectFirestore=firebase.firestore();
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;
  export {projectFirestore,projectStorage,timestamp,realTime};