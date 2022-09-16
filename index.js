var readUserInput = require('readline-sync');
var score = 0;
var min = 3;
var maxScore = 0;
var ScoreBoard = [{
  name: "Ram",
  highScore: 5
}, {
  name: "Akshay",
  highScore: 6
}, {
  name: "Sushant",
  highScore: 7
}];

console.log(" ---- Welcome to Neog levelzer0 Quiz 2 ---- ");
var name = readUserInput.question("May I know your ? ");
console.log("Welcome " + name + ", glad you finally started ..!! ");
console.log("                                      ");
console.log("Let's play a quiz about 'Countries and Capitals' ");
console.log("                                      ");
console.log("ScoreBoard");
for (let i = 0; i < ScoreBoard.length; i++) {
  console.log(ScoreBoard[i].name + " : " + ScoreBoard[i].highScore);
}
console.log("                                      ");
console.log("-- Level One -- ");
console.log("type in the Answer ");

const levelOneQuestions = [{
  quest: "What is the Capital of Japan ? ",
  ans: "Tokyo",
  correctAns: "Tokyo "
}, {
  quest: "What is the Capital of Italy ? ",
  ans: "Rome",
  correctAns: "Rome "
}, {
  quest: "What is the Capital of England ? ",
  ans: "London",
  correctAns: "London "
}, {
  quest: "What is the Capital of Germany ? ",
  ans: "Berlin",
  correctAns: "Berlin "
}, {
  quest: "What is the Capital of Spain? ",
  ans: "Madrid",
  correctAns: "Madrid "
}];

const levelTwoQuestions = [{
  quest: `Brussels is the Capital of which Country ? 
  a: Scotland
  b: Ireland
  c: Belgium
  d: Bulgaria `,
  ans: "c",
  correctAns: "Belgium "
}, {
  quest: `Cairo is the Capital of which Country ?
  a: Taiwan
  b: Egypt
  c: Tanzania
  d: Nigeria `,
  ans: "b",
  correctAns: "Egypt "
}, {
  quest: `Tehran is the Capital of which Country ? 
  a: Israel
  b: Iran
  c: Iraq
  d: Oman `,
  ans: "b",
  correctAns: "Iran "
}, {
  quest: `Canberra is the capital of which Country ?
  a: New Zealand
  b: Australia
  c: Russia
  d: Poland `,
  ans: "b",
  correctAns: "Australia "
}, {
  quest: `Buenos Aires is the Capital of which Country ?
  a: Brazil
  b: Chile
  c: Argentina
  d: Uraguay `,
  ans: "c",
  correctAns: "Argentina "
}]

levelOneQuestions.forEach(i => {
  gameOn(i.quest, i.ans, i.correctAns);
}
)


if (score >= min) {
  console.log("                                      ");
  console.log("You Cleared Level One ");
  console.log("                                      ");
  console.log("-- Level Two -- ");
  console.log("type in the Option ");
  console.log("                                      ");
  
  levelTwoQuestions.forEach(i => {
    gameOn(i.quest, i.ans, i.correctAns);
  })
}
else {
  console.log("                                      ");
  console.log("Sorry you can't go to Level Two as a minimum score of 3 is required ");
}

function gameOn(quest, ans, correctAns) {
  var userInput = readUserInput.question(quest);
  if (userInput.toLowerCase() === ans.toLowerCase()) {
    score++;
    console.log("That's Correct :) " + "Score is : " + score);
  }
  else {
    console.log("That's wrong :( " + "Correct Answer is : " + correctAns + "Score is :" + score);
  }
}

ScoreBoard.forEach(i => {
  maxScore = Math.max(i.highScore);
})

if (score > maxScore) {
    var highScore = score;
  var newUser = { name, highScore };
  ScoreBoard.push(newUser);
  console.log("                                      ");
  console.log("Congrats .. You beat the high score !! ");
  console.log("                                      ");
  console.log("ScoreBoard");
  console.log("                                      ");
  for (let i = 0; i < ScoreBoard.length; i++) {
    console.log(ScoreBoard[i].name + " : " + ScoreBoard[i].highScore);
  }
}

console.log("                                      ");
console.log(" -- Thankyou for you Participation -- ");