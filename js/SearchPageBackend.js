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

const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

var database = firebase.database();
database.ref("users").on("value", showdata);
function showdata(data) {
  var x = Object.entries(data.val());
  for (var i = 0; i < x.length; i++) {
    hpCharacters.push(x[i][1]);
  }
  displayCharacters(hpCharacters);
}

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  console.log(searchString);

  const filteredCharacters = hpCharacters.filter((character) => {
    return character.Class.toLowerCase().includes(searchString);
  });
  displayCharacters(filteredCharacters);
});

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      console.log(character.key);
      return `
      <a id="myname" href="./Transactionhistory.html" onclick=getId(this.id)>
        <div  class="projcard projcard-customcolor">
        <div class="projcard-innerbox">
        <img
          class="projcard-img"
          src="./img/69561.jpg"
        />
        <div class="projcard-textbox">
          <div class="projcard-title">${character.Class}</div>
          <div class="projcard-description">
          House: ${character.Name}
          </div>
        </div>
        </div>
        </div>
        </a>
    `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};
function getId(Id) {
  localStorage.setItem("TransferId",Id)
}
