const chalk = require("chalk");
const readlineSync = require('readline-sync');


var user = readlineSync.question("What is your name? ");
console.log("Welcome " + chalk.red(user));
console.log(chalk.blue("Welcome to my quiz"));

var score = 0;
var Highscore = 0;

const questions = [{
  question: "Where do I live? ",
  ans: "Noida"
},
{
  question: "Where I was born? ",
  ans: "Bareilly"
},
{
  question: "What is my favourite movie? ",
  ans: "Good Will Hunting"
},
{
  question: "Where do I work? ",
  ans: ""
}]


for (var i = 0; i < questions.length; i++) {
  var question = questions[i].question;
  var ans = questions[i].ans;
  play(question, ans);
}

function play(ques, ans) {
  console.log(ques);
  const userAns = readlineSync.prompt();
  if (userAns.toUpperCase() === ans.toUpperCase()) {
    console.log(chalk.green("Correct!"));
    score = score + 1;
    console.log("Current Score: " + score);
  }
  else {
    console.log(chalk.red("Wrong!"));
    console.log("Current Score: " + score);
  }
  console.log("----------------------");
}

console.log("You scored: " + score);
if (score > Highscore) {
  Highscore = score;
  console.log("Updated Highscore is: " + Highscore);
}
else {
  console.log("Highscore is: " + score);
}

