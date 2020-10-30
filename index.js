function ageInDays() {
  var year = Number(prompt("Enter your birth year:"));
  var age = (2020 - year) * 365;
  var h1 = document.createElement("h1");
  h1.setAttribute("id", "answer-header"); //used for reset button
  var answer = "Your age in days is " + age;
  h1.append(answer);
  document.getElementById("result-1").appendChild(h1);
}

function reset() {
  document.getElementById("answer-header").remove();
}

// cat generator
function generate() {
  let image = document.createElement("img");
  image.setAttribute(
    "src",
    "http://thecatapi.com/api/images/get?format=src&type=gif&size=small"
  );
  document.getElementById("result-2").appendChild(image);
}

//rock paper scissors
function rps(yourChoice) {
  var userChoice = yourChoice.id;
  var botChoice = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  botChoiceSrc = document.getElementById(botChoice).getAttribute("src");
  var winnerDb = {
    rock: {
      rock: 0.5,
      paper: 0,
      scissors: 1,
    },
    paper: {
      rock: 1,
      paper: 0.5,
      scissors: 0,
    },
    scissors: {
      rock: 0,
      paper: 1,
      scissors: 0.5,
    },
  };
  var message = "";
  var color = "";
  switch (winnerDb[userChoice][botChoice]) {
    case 1: {
      message = "You won!";
      color = "green";
      break;
    }
    case 0.5: {
      message = "Game tied!";
      color = "yellow";
      break;
    }
    case 0: {
      message = "You lost!";
      color = "red";
      break;
    }
  }

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();

  userImage = document.createElement("img");
  userImage.setAttribute("src", yourChoice.src);
  userImage.setAttribute("style", "height:150; object-fit:contain; ");

  botImage = document.createElement("img");
  botImage.setAttribute("src", botChoiceSrc);
  botImage.setAttribute("style", "height:150; object-fit:contain; ");

  winnerText = document.createElement("h1");
  winnerText.setAttribute(
    "style",
    "color:" + color + ";text-shadow: 2px 2px 8px black;"
  );
  winnerText.append(message);

  document.getElementById("rps").appendChild(userImage);
  document.getElementById("rps").appendChild(winnerText);
  document.getElementById("rps").appendChild(botImage);
}
