
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyB1D4tTZ48xJwIikpN0NMiNN32pvFvreV4",
      authDomain: "classtest-30af7.firebaseapp.com",
      databaseURL: "https://classtest-30af7-default-rtdb.firebaseio.com",
      projectId: "classtest-30af7",
      storageBucket: "classtest-30af7.appspot.com",
      messagingSenderId: "42012445243",
      appId: "1:42012445243:web:3dacc0daca99230235ea1e"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
