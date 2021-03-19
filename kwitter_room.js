var firebaseConfig = {
  apiKey: "AIzaSyCsX9VNwoVfzL9--2O-G3b91r2HLRZsytg",
  authDomain: "kwitter-homework-afec9.firebaseapp.com",
  databaseURL: "https://kwitter-homework-afec9-default-rtdb.firebaseio.com",
  projectId: "kwitter-homework-afec9",
  storageBucket: "kwitter-homework-afec9.appspot.com",
  messagingSenderId: "434820575869",
  appId: "1:434820575869:web:81ccc83c2be666960bf714"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
              childKey = childSnapshot.key;
              Room_names = childKey;
              //Start code
              console.log("Room Name - " + Room_names);
              row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
              document.getElementById("output").innerHTML += row;
              //End code
        });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}