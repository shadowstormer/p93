// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyDG9mo7c70EBRL529L2SGnQV2vDmGf15R4",
      authDomain: "c93-first-project.firebaseapp.com",
      projectId: "c93-first-project",
      storageBucket: "c93-first-project.appspot.com",
      messagingSenderId: "547882427775",
      appId: "1:547882427775:web:5aefd27f36c16d6d99e64a"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
