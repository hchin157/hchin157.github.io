(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "full_species_list":[
      {"name": "Bulbasaur"},
      {"name": "Ivysaur"},
      {"name": "Venusaur"},
      {"name": "Charmander"},
      {"name": "Charmeleon"},
      {"name": "Charizard"},
      {"name": "Squirtle"},
      {"name": "Wartortle"},
      {"name": "Blastoise"},
      {"name": "Chespin"},
      {"name": "Quilladin"},
      {"name": "Chesnaught"},
      {"name": "Fennekin"},
      {"name": "Braixen"},
      {"name": "Delphox"},
      {"name": "Froakie"},
      {"name": "Frogadier"},
      {"name": "Greninja"},
  ]
}

},{}],2:[function(require,module,exports){
var alldata = require('./data.json')
const full_list = alldata.full_species_list

let entry_template = `
  <h3></h3>
  <p></p>
  <img></img>
`
let entry_list = document.querySelector('.dex');

let form = document.querySelector(".annex");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  adder();
})

let adder = function() {
  const input = document.querySelector('#species');

  let entry = document.createElement("div");
  entry.setAttribute("class", "entry");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = input.selectedIndex;
  entry.querySelector("p").innerText = input.value;
  entry.querySelector("img").src = "images/sprites_full/"+ input.value + ".gif";
  entry.querySelector("img").setAttribute("class", "portrait");

  entry_list.appendChild(entry);
}

function loadDex(list) {
  console.log("Loaded!");

  list.forEach((pokemon) => {
    let species = document.querySelector("[id='species']")
    let option = document.createElement("option")
    option.text = pokemon.name
    species.add(option)
  });
}

function loadRank(){
  console.log("Also loaded!");
  let ranker = document.querySelector("[id='rank']")
  var i;
  for (i = 0; i < 10; i++) {
    let rank = document.createElement("option")
    rank.text = i+1
    ranker.add(rank)
  }
}


window.addEventListener("load", (event) => {
  console.log("EGG")
  loadDex(full_list);
  loadRank();
  });

},{"./data.json":1}]},{},[2]);
