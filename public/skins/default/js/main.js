const status = firebase.firestore().collection("status");

var stat = document.getElementById("status");
var ans = document.getElementById("answer");

var getStatus = function() {
  console.log("Getting status");
  status.doc("current").onSnapshot(function(doc) {
    console.log(doc.data().available + " " + doc.data().reason);
    if (doc.data().available === true) {
      ans.innerHTML = "here " + doc.data().reason;
      document.getElementById("display").style.backgroundColor =
        "rgb(0, 18, 73)";
    } else {
      ans.innerHTML = doc.data().reason;
      document.getElementById("display").style.backgroundColor =
        "rgb(142,21,0)";
    }
  });
};

window.addEventListener(
  "load",
  function() {
    getStatus();
  },
  false
);
