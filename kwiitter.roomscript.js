//ADD YOUR FIREBASE LINKS HERE
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
document.getElementById("username").innerHTML="welcome fellow human "+Username +"!"
function addroom(){
roomname=document.getElementById("input").value;
firebase.database().ref("/").child(roomname).update({
purpose:"adding room name "

})
localStorage.setItem("roomname",roomname)
window.location="kwitter_textpage.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names)
row="<div class='room_name' id="+Room_names+" onclick='getroomname(this.id)'> #"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML+=row

      //End code
      });});}
getData();
function getroomname(name){
console.log(name)
localStorage.setItem("roomname",name)
window.location="kwitter_textpage.html"
}
function logout(){
localStorage.removeItem("username")
localStorage.removeItem("roomname")
window.location="index.html"
}