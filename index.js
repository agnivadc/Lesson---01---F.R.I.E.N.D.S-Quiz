const chalk = require('chalk');
 console.log(chalk.bgCyan.bold('Hello!! Welcome to F.R.I.E.N.D.S Quiz !! \n' ));

var readlineSync = require('readline-sync');

var highScore = 5;

var questionsList = [{
    Question: chalk.red("How many seasons of Friends are there? "),
    Answer: "10"
},
{
    Question: chalk.red("How many times did Ross get divorced? "),
    Answer: "three"
},
{
    Question: chalk.red("What store does Phoebe hate? "),
    Answer: "pottery barn"
},
{
    Question: chalk.red("Rachel got a job with which company in Paris? "),
    Answer: "louis vuitton"
},
{
    Question: chalk.red("What was the occupation of Rachel’s fiancé Barry Farber? "),
    Answer: "orthodontist"
},
{
    Question: chalk.red("Who was the maid of honor at Monica’s wedding? "),
    Answer: "rachel"
}];

function quizMe(questions){
  var score = 0;
  
  for(var i=0; i<questions.length; i++){
  
    var ans = readlineSync.question(questions[i].Question);
    if(ans.toLowerCase() === questions[i].Answer){
      score++;
      console.log(chalk.green("You are right!!🤩"));
    }
    else{
      console.log(chalk.magenta("Oops you got it wrong!!😔"));
    }
    
  }
  console.log("High score : " + highScore);
  console.log("Your score : " + score);
}

quizMe(questionsList);