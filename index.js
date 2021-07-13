var readlineSync = require('readline-sync');
var chalk = require('chalk');

console.log(chalk.hex('#DEADED')("Let's see how well you know SIMRAN ❤️ \n"));

var userName = readlineSync.question(chalk.cyanBright("Please enter your name : \n"));

console.log(chalk.hex('#DEADED')("\nHi " + userName + " ❤️\nEnter a/ b/ c as answers for each question."));
console.log(chalk.black.bold.bgWhite("\nNOTE: For each correct answer you will get 1 point.\n"));


var score = 0;

function play(question, answer) {
  var userAns = readlineSync.question(question);
  if (userAns.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("Congo! You are right :)"));
    score++;
  } else {
    console.log(chalk.bold.red("Oops! You are wrong :("));
  }
  console.log(chalk.bold.yellowBright("Your current score is " + score));
  console.log("\n-----------------\n")
}


var allQuestions = [{
  question: "1. Where do I live ?\na.Bhopal\nb.Indore\nc.Gwalior\n\n",
  answer: "b"
}, {
  question: "2. What is my favourite color ?\na.Blue\nb.Pink\nc.Green\n\n",
  answer: "a"
}, {
  question: "3. What is my hobby ?\na.SInging\nb.Dancing\nc.Sketching\n\n",
  answer: "c"
}, {
  question: "4. What is my favourite subject ?\na.Physics\nb.Chemistry\nc.Maths\n\n",
  answer: "c"
}, {
  question: "5. When is my birthday ?\na.29th July\nb.30th July\nc.31st July\n\n",
  answer: "c"
}, {
  question: "6. Which is my favourite pet ?\na.Cat\nb.Dog\nc.Mice\n\n",
  answer: "b"
}, {
  question: "7. What is my favourite food ?\na.South Indian\nb.Chiness\nc.North Indian\n\n",
  answer: "b"
}, {
  question: "8. Who is my favourite singer ?\na.Selena gomez\nb.Maggie Lindemann\nc.Taylor Swift\n\n",
  answer: "a"
}, {
  question: "9. What is my nick-name ?\na.Simmi\nb.Pinna\nc.Simma\n\n",
  answer: "b"
}, {
  question: "10. What types of songs do I love the most ?\na.Indie\nb.Lofi\nc.Hip-hop\n\n",
  answer: "b"
}];

var highScore=[
  {name:"Simran", topScore:"10"},
  {name:"Manav", topScore:"8"},
  {name:"Mradul", topScore:"6"},
];

for (var i = 0; i < allQuestions.length; i++) {
    var currentQues = allQuestions[i];
    play(currentQues.question, currentQues.answer);
}

console.log(chalk.hex('#DEADED').bold("YAYY! YOUR TOTAL SCORE IS "+score));


 console.log(chalk.keyword('orange').bold("\n***** Check out Scoreboard *****"));
 printScoreBoard(highScore);

var scoreBeaten=false;
var indexInsert=0;
for(var i=0; i<highScore.length; i++){
  if(score>=highScore[i].topScore){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {name:`${userName}`, topScore:`${score}`});
    break;
  }
}
console.log('---------------------------------')

if(scoreBeaten){
  console.log(chalk.bold.keyword('pink')("Congratulations "+userName+" , you have beaten the SCORE-BOARD. You know me very well ❤️"));

  console.log(chalk.keyword('orange').bold("\n***** U P D A T E D    S C O R E B O A R D *****"));
  printScoreBoard(highScore);
  console.log("\nSend me the screenshot of your final score so that I can update the actual scoreboard ❤️\n\n\n\n");
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you were so close to be my best friend 🙃"))
}

function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.cyan.bold(highScore[i].name+" : " +highScore[i].topScore));
  }
}

