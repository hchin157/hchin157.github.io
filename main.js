/* Data is stored in data.json */
var alldata = require('./data.json')
const full_list = alldata.full_species_list
const small_list = alldata.gender_variant_list

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
  <h3></h3> <h4></h4> <h5></h5>
  <p></p>
  <img></img>
`
let entry_list = document.querySelector('.dex');

const select = document.getElementById('species')
const ranker = document.getElementById('rank')
const gender = document.getElementById('gender')
const submit = document.querySelector("[type='submit']")
const form = document.querySelector(".annex");

select.addEventListener('change', (event) => {
  checker(select, ranker, gender, submit);
})

let checker = function(input, input2, input3, submit) { //checks if a species is selected before allowing submission.
  const indexer = input.selectedIndex

  let i, j = input3.options.length - 1;
     for(i = j; i >= 0; i--) {
        input3.remove(i);
     } //removes the options, if added.

  if (indexer != 0) {
    const x = document.querySelectorAll('.hidden'); //selects the hidden labels and select elements.
    x.forEach((item) => { item.style.display = "inline"; } ) //makes them visible.
    submit.disabled = false;

    //updated loadRank()
    loadGender(input, input3) //loads appropriate genders.
  }
}

let loadGender = function(z, y) { //species, and gender select
  let crude = z.value
  let species = comparator(z.selectedIndex, crude).substr(4) //just want to trim the bit before, so comparator() is used.
  console.log(species)
  let genders = ["Male", "Female", "Genderless",]
  let final = []
  switch(species) {
    case 'Mothim':
    case 'Gallade':
      final.push(genders[0])
      break; //male only
    case 'Happiny':
    case 'Chansey':
    case 'Blissey':
    case 'Wormadam':
    case 'Vespiquen':
    case 'Froslass':
    case 'Cresselia':
      final.push(genders[1])
      break; //female only
    case 'Bronzor':
    case 'Bronzong':
    case 'Unown':
    case 'Rotom':
    case 'Magnemite':
    case 'Magneton':
    case 'Magnezone':
    case 'Porygon':
    case 'Porygon2':
    case 'Porygon-Z':
    case 'Uxie':
    case 'Mesprit':
    case 'Azelf':
    case 'Dialga':
    case 'Palkia':
    case 'Giratina':
    case 'Heatran':
    case 'Regigigas':
    case 'Phione':
    case 'Manaphy':
    case 'Darkrai':
    case 'Shaymin':
    case 'Arceus':
      final.push(genders[2])
      break; //genderless
    default:
      final.push(genders[0])
      final.push(genders[1])
  }
  final.forEach((item) => {
    let option = document.createElement("option")
    option.text = item
    y.add(option)
  });
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (party.length < 4) { //max party of 4.
    adder(select, ranker, gender);
  } else {
    alert("You've reached the maximum capacity of your party.\nPlease use the PC.")
  }
  resetter(select, submit);
})

let adder = function(input, input2, input3) { //adds a Pokemon to the dex, and the party array.
  let entry = document.createElement("div");
  entry.setAttribute("class", "entry");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = "#"+input.selectedIndex; //the pokedex number.
  entry.querySelector("h4").innerText = "Rank: "+input2.value; //the rank.
  entry.querySelector("h5").innerText = "Gender: "+ input3.value; //gender.
  entry.querySelector("p").innerText = input.value;
  entry.querySelector("img").src = "images/sprites_full/" + comparator(input.selectedIndex, input.value) + variator(input, input3.value) + ".gif";
  entry.querySelector("img").setAttribute("class", "portrait");

  entry_list.appendChild(entry);

  partyAdd(party, input.value, input2.value);
}

let comparator = function (index, value) {
  let first = "";
  let second = "";
  if (index < 10) {
    first = "00" + index + "_";
    second = value.substr(3); //substring trims the numbering added by loadDex.
  } else if (index < 100) {
    first = "0" + index + "_";
    second = value.substr(4);
  } else {
    first = index + "_";
    second = value.substr(5);
  }
  let final = first + second;
  return final;
}

let variator = function (species, gender) {
  let gendervar = "";
  let spc = comparator(species.selectedIndex, species.value).substr(4); //trims species value.
  if (small_list.includes(spc)) {
    gendervar = gendervar + gender;
  }
  return gendervar;
}

let resetter = function(input, submit) { //resets the form to onload state.
  input[0].selected = true
  submit.disabled = true
  document.getElementById("rank")[0].selected = true //selects rank 1 on reset.

  const x = document.querySelectorAll('.hidden'); //selects the visible labels and select elements.
  x.forEach((item) => { item.style.display = "none"; } ) //makes them hidden.
}


/* Dex Functions */
const party = [];

let partyAdd = function(party, a, b) { //adds newly added Pokemon to the party array.
  party.push( {"name": a, "rank": b,/* "health": c, */})
}


/* On window load, the species and rank selects in the annex form will get filled. */
let loadDex = function(list) { //loads species.
  console.log("Loaded!");
  let i = 0;
  list.forEach((pokemon) => {
    let species = document.querySelector("[id='species']")
    let option = document.createElement("option")
    i += 1;
    option.text = i + ". " + pokemon.name;
    species.add(option);
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
