/* Data is stored in data.json */
var alldata = require('./data.json')
const full_list = alldata.full_species_list

/* Classes */
/*class Pokemon {
  constructor(name, rank, health){
    this.name = name;
    this.rank = rank;
    this.health = health;
  }
}*/


/* Add entries to the "dex" div element.*/
let entry_template = `
  <h3></h3> <h4></h4>
  <p></p>
  <img></img>
`
let entry_list = document.querySelector('.dex');

const select = document.getElementById('species')
const ranker = document.getElementById('rank')
const submit = document.querySelector("[type='submit']")
const form = document.querySelector(".annex");

select.addEventListener('click', (event) => {
  checker(select, submit);
})

let checker = function(input, submit) { //checks if a species is selected before allowing submission.
  const indexer = input.selectedIndex
  if (indexer != 0) {
    submit.disabled = false
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (party.length < 4) { //max party of 4.
    adder(select, ranker);
  } else {
    alert("You've reached the maximum capacity of your party.\nPlease use the PC.")
  }
  resetter(select, submit);
})

let adder = function(input, input2) { //adds a Pokemon to the dex, and the party array.
  let entry = document.createElement("div");
  entry.setAttribute("class", "entry");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = "#"+input.selectedIndex;
  entry.querySelector("h4").innerText = "Rank: "+input2.value;
  entry.querySelector("p").innerText = input.value;
  entry.querySelector("img").src = "images/sprites_full/"+ input.value + ".gif";
  entry.querySelector("img").setAttribute("class", "portrait");

  entry_list.appendChild(entry);

  partyAdd(party, input.value, input2.value);
}

let resetter = function(input, submit) { //resets the form to onload state.
  input[0].selected = true
  submit.disabled = true
  document.getElementById("rank")[0].selected = true //selects rank 1 on reset.
}


/* Dex Functions */
const party = [];

let partyAdd = function(party, a, b) { //adds newly added Pokemon to the party array.
  party.push( {"name": a, "rank": b,/* "health": c, */})
}


/* On window load, the species and rank selects in the annex form will get filled. */
let loadDex = function(list) { //loads species.
  console.log("Loaded!");

  list.forEach((pokemon) => {
    let species = document.querySelector("[id='species']")
    let option = document.createElement("option")
    option.text = pokemon.name
    species.add(option)
  });
}

let loadRank = function() { //loads ranks.
  console.log("Also loaded!");

  let ranker = document.querySelector("[id='rank']")
  var i;
  for (i = 0; i < 10; i++) {
    let rank = document.createElement("option")
    rank.text = i+1
    ranker.add(rank)
  }
}

window.addEventListener("load", (event) => { //calls the loading functions on window load.
  loadDex(full_list);
  loadRank();
  });
