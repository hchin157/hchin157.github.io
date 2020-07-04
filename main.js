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
  const input = document.querySelector('[id=species]');

  let entry = document.createElement("div");
  entry.setAttribute("class", "companion");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = input.value;
  entry.querySelector("p").innerText = "";
  entry.querySelector("img").src = "images/sprites_full/"+ input.value + ".gif";
  entry.querySelector("img").setAttribute("class", "portrait");

  entry_list.appendChild(entry);
}


let loadDex = function() {
  console.log("Loaded!");
}
