const charactersList = document.getElementById("charactersList");
const searchBar = document.getElementById("searchBar");
let hpCharacters = [];

searchBar.addEventListener("keyup", (e) => {
  const searchString = e.target.value.toLowerCase();
  if (searchString != "") {
    const filteredCharacters = hpCharacters.filter((character) => {
      return (
        character.name.toLowerCase().includes(searchString) ||
        character.house.toLowerCase().includes(searchString)
      );
    });
    displayCharacters(filteredCharacters);
  }
});

const loadCharacters = async () => {
  try {
    const res = await fetch("https://hp-api.herokuapp.com/api/characters");
    hpCharacters = await res.json();
    displayCharacters(hpCharacters);
  } catch (err) {
    console.error(err);
  }
};

const displayCharacters = (characters) => {
  const htmlString = characters
    .map((character) => {
      return `
        <div class="projcard projcard-customcolor">
        <div class="projcard-innerbox">
        <img
          class="projcard-img"
          src="${character.image}"
        />
        <div class="projcard-textbox">
          <div class="projcard-title">${character.name}</div>
          <div class="projcard-description">
          House: ${character.house}
          </div>
        </div>
        </div>
        </div>
    `;
    })
    .join("");
  charactersList.innerHTML = htmlString;
};

loadCharacters();
