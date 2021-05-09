let randomNumber = Math.ceil(Math.random() * 100);
let guessHistory = document.createElement("p");
let username = prompt("username :");

let inputValue = document
  .querySelector(".guess-number")
  .addEventListener("change", (e) => (inputValue = e.target.value));

document.querySelector(".input-guess").addEventListener("click", (e) => {
  e.preventDefault();

  let number = parseInt(inputValue);
  const addWrong = () =>
    document.querySelector(".indicator").classList.add("wrong");

  const indicator = (message) =>
    (document.querySelector(".indicator").innerText = message);

  if (number < randomNumber) {
    addWrong();
    indicator("Your Guess Too Low!");
  } else if (number > randomNumber) {
    addWrong();
    indicator("Your Guess Too High!");
  } else {
    indicator(`You Guessed It, ${username}!`);

    document.querySelector(".indicator").classList.remove("wrong");
    document.querySelector(".indicator").classList.add("correct");
    document.querySelector(".input-guess").setAttribute("disabled", "true");
    document.querySelector(".guess-number").setAttribute("disabled", "true");
  }
});
