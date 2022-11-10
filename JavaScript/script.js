//comment in JS
//add 3 examples of javascript
function helloWorld() {
  document.write("Hello World!"); //Writes "Hello World to the web page"
}

function printName() {
  var name = prompt("What's your name?"); //prompts the user to enter name.
  document.write(`<h1>Hello ${name}!</h1>`); //writes entered name to page.
}

function guessGame() {
  var secretNumber = Math.floor(Math.random() * 11); //creates the secret number, between 0 and 1, multiplies it by 11 and rounds to the lowest whole number.

  for (i = 0; i < 3; i++) {
    var guess = parseInt(
      prompt("I'm thinking of a number between 1 and 10. \nEnter your guess:") //prompts the user to enter a guess.
    );
    if (guess == secretNumber) {
      document.write("<h1>Your guess is correct!</h1>"); //writes "Your guess is correct!" to the page.
      break;
    } else {
      document.write(`<h1>Your guess ${i + 1} wrong!</h1>`); //tells the user their guess number and guess is wrong and writes it to the page.
    }
  }
  document.write(`<h1>The correct answer was: ${secretNumber}</h1>`); //writes the correct secret number to the page.
}
