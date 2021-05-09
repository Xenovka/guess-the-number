let randomNumber = Math.ceil(Math.random() * 100);
let username = prompt("username :");

let indicatorElement = document.querySelector(".indicator");
let inputGuessElement = document.querySelector(".input-guess");
let guessNumberElement = document.querySelector(".guess-number");
let inputHistoryElement = document.querySelector(".input-history");

let inputValue = guessNumberElement.addEventListener(
  "change",
  (e) => (inputValue = e.target.value)
);

inputGuessElement.addEventListener("click", (e) => {
  e.preventDefault();

  let number = parseInt(inputValue);
  const addWrong = () => indicatorElement.classList.add("wrong");

  const indicator = (message) => (indicatorElement.innerText = message);

  if (number < randomNumber) {
    addWrong();
    indicator("Your Guess Too Low!");
  } else if (number > randomNumber) {
    addWrong();
    indicator("Your Guess Too High!");
  } else if (number === randomNumber) {
    indicator(`You Guessed It${username ? `, ${username}` : `, Congrats`}!`);

    indicatorElement.classList.remove("wrong");
    indicatorElement.classList.add("correct");
    inputGuessElement.setAttribute("disabled", "true");
    guessNumberElement.setAttribute("disabled", "true");
  } else {
    addWrong();
    indicator("Input Must be a String!");
  }
});

inputGuessElement.addEventListener("click", (e) => {
  e.preventDefault();

  inputHistoryElement.insertAdjacentHTML(
    "beforeend",
    `<p>Your Guessed is ${inputValue}</p>`
  );
});
