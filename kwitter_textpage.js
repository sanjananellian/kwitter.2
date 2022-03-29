//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyBLLvoik98kRigB3WPvt80Max4aa3-U5qE",
    authDomain: "kwitter-d1f74.firebaseapp.com",
    databaseURL: "https://kwitter-d1f74-default-rtdb.firebaseio.com",
    projectId: "kwitter-d1f74",
    storageBucket: "kwitter-d1f74.appspot.com",
    messagingSenderId: "468248114027",
    appId: "1:468248114027:web:3afa2a195c79cfe5b8922e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
Username=localStorage.getItem("username")
room_name= localStorage.getItem("roomname")

function send(){
msg=document.getElementById("inputmsg").value;  
firebase.database().ref(room_name).push({
name:Username,
message:msg,
like:0


});
document.getElementById("inputmsg").value="";   
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();