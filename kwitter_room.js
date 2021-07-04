//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCcwFtts-koGfz7-XZ4dCn1LMpmnAq8oyQ",
  authDomain: "lets-chat-2984a.firebaseapp.com",
  databaseURL: "https://lets-chat-2984a-default-rtdb.firebaseio.com",
  projectId: "lets-chat-2984a",
  storageBucket: "lets-chat-2984a.appspot.com",
  messagingSenderId: "67889821599",
  appId: "1:67889821599:web:04d4e5d0fffc9acc20afaa"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !!";

function add_room() {
  room_name = document.getElementById("add_room").value;
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
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}