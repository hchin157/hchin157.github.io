let entry_template = `
  <h3></h3>
  <p></p>
`
let entry_list = document.querySelector('[id=dex]');

let adder = function() {
  const input = document.querySelector('[id=species]');

  let entry = document.createElement("div");
  entry.setAttribute("class", "temp");
  entry.innerHTML = entry_template;

  entry.querySelector("h3").innerText = input.value;
  entry.querySelector("p").innerText = "This is a breakfast food.";

  entry_list.appendChild(entry);
}

let form = document.querySelector("[id=party]");
form.addEventListener('submit', (event) => {
  event.preventDefault();
  adder();
})
