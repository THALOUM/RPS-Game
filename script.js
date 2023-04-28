"use strict";

const body = document.querySelector(`body`);
// Buttons:
const begain = document.querySelector(`.begain`);
const again = document.querySelector(`.again`);

// Playing Img:
const rock = document.querySelector(`.playing-rock`);
const paper = document.querySelector(`.playing-paper`);
const scissors = document.querySelector(`.playing-scissors`);

// Sections:
const main = document.querySelector(`.main`);
const hands = document.querySelector(`.hands`);
const result = document.querySelector(`.result`);

// Result section:
// 1- result message and img:
let resultMessage = document.querySelector(`.result-massage`);
const resultImg = document.querySelector(`.result-img`);

// 2- change img scr attr inside figure element:
const userAttr = document.querySelector(`.result-user-fig img`);
const computerAttr = document.querySelector(`.result-computer-fig img`);

// 3- changing the figcaption inside figure element:
let userFigcaption = document.querySelector(`.result-user-fig figcaption`);
let computerFigcaption = document.querySelector(
  `.result-computer-fig figcaption`
);

// create user and computer arrays holds the scr of hands img:
const userArray = [
  "images/user_rock.png",
  "images/user_paper.png",
  "images/user_scissor.png",
];
const computerArray = [
  "images/computer_rock.png",
  "images/computer_paper.png",
  "images/computer_scissor.png",
];
const pickArray = ["ROCK", "PAPER", "SCISSORS"];

// 1- add event handler to begian button to remove hidden class forn hand section and add it to the main sectionL
begain.addEventListener("click", function () {
  console.log("yes");
  main.classList.add("hidden");
  hands.classList.remove("hidden");
});

// 2- create change function for change color, message and img of wining, losing, or draw:
const change = function (point) {
  const colorArray = ["#654321", "#FFD700", " #ffdcb6"];
  const messageArray = [
    "We are screwed, The computer Win!",
    "You Beats the Computer, i think we can survive Skynet",
    "OOPS IT's a draw!, We will come back",
  ];
  const gifArray = [
    "images/computer win.gif",
    "images/user win.gif",
    "images/draw.gif",
  ];

  switch (point) {
    case 0:
      body.style.backgroundColor = colorArray[0];
      resultMessage.textContent = messageArray[0];
      resultImg.setAttribute("src", gifArray[0]);
      break;
    case 1:
      body.style.backgroundColor = colorArray[1];
      resultMessage.textContent = messageArray[1];
      resultImg.setAttribute("src", gifArray[1]);
      break;
    case 2:
      body.style.backgroundColor = colorArray[2];
      resultMessage.textContent = messageArray[2];
      resultImg.setAttribute("src", gifArray[2]);
      break;
  }
};

// 3- create winnig or losing function that using the logic to determine who will win:
const winOrLose = function (userScore, computerScore) {
  if (userScore === computerScore) {
    change(2);
  } else if (userScore > computerScore || computerScore - userScore == 2) {
    if (userScore - computerScore == 2) {
      change(0);
    } else {
      change(1);
    }
  } else {
    change(0);
  }
};

// 4- create the pick function holding the codes that done if the user pick any hand:
const pick = function (userScore) {
  // A- add hidden class to the hands section and remove it from result section:
  hands.classList.add("hidden");
  result.classList.remove("hidden");

  // B- pick a random result for the computer from 0 to 2:
  const computerScore = Math.floor(Math.random() * 3);
  console.log(computerScore);

  // C- applay the scores to the img attr and figcaption inside of the user and computer figure element:
  userAttr.setAttribute("src", userArray[userScore]);
  userFigcaption.textContent = pickArray[userScore];
  computerAttr.setAttribute("src", computerArray[computerScore]);
  computerFigcaption.textContent = pickArray[computerScore];

  // d- implment the wir or lose function:
  winOrLose(userScore, computerScore);
};

// 5- Now add event handler on every hand:
rock.addEventListener("click", function () {
  let score = 0;
  pick(score);
});

paper.addEventListener("click", function () {
  let score = 1;
  pick(score);
});

scissors.addEventListener("click", function () {
  let score = 2;
  pick(score);
});

// 6- add event handler to again button to reset the game:
again.addEventListener("click", function () {
  body.style.backgroundColor = " #ffdcb6";
  result.classList.add("hidden");
  main.classList.remove("hidden");
});
