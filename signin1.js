var firebaseConfig = {
  apiKey: "AIzaSyAfwDAtL1WGFNxPVGHeAiWcbEghVo0AjxE",
  authDomain: "bona-fide-e6405.firebaseapp.com",
  databaseURL: "https://bona-fide-e6405.firebaseio.com",
  projectId: "bona-fide-e6405",
  storageBucket: "bona-fide-e6405.appspot.com",
  messagingSenderId: "1078457724723",
  appId: "1:1078457724723:web:cac255c39e772ac46cd846",
  measurementId: "G-8S58YSF0JX",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
initApp = function () {
  firebase.auth().onAuthStateChanged(
    function (user) {
      if (user) {
        console.log(user.email);
      } else {
        // User is signed out.
        document.getElementById("sign-in-status").textContent = "Signed out";
        document.getElementById("sign-in").textContent = "Sign in";
        document.getElementById("account-details").textContent = "null";
      }
    },
    function (error) {
      console.log(error);
    }
  );
};
window.addEventListener("load", function () {
  initApp();
});
function myfunction() {
  console.log(firebase.auth().currentUser.uid);
}
window.setTimeout(myfunction, 10000);
