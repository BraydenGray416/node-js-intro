const process = require('process');

const questions = [
  "What is 2+2?",
  "How many sides are there on an octagon?",
  
]

const correctAnswers = [
  "4",
  "8"
]

let usersAnswers = [];

process.stdout.write(`\n\n${questions[0]}\n\n`);
process.stdin.on("data", function(answer){
  console.log(answer.toString().trim());
  let inputAnswer = answer.toString().trim();
  if (inputAnswer === `${correctAnswers[0]}`) {
    process.stdout.write(`\n\n${questions[1]}\n\n`);
    process.stdin.on("data", function(answer){
      console.log(answer.toString().trim());
      let inputAnswer = answer.toString().trim();
      if (inputAnswer === `${correctAnswers[1]}`) {
        process.exit();
      } else {
        process.stdout.write(`\n${inputAnswer}Wrong answer, please try again\n`)
      }
    })
  } else {
    process.stdout.write(`\n${inputAnswer}Wrong answer, please try again\n`)
  }
})

process.on('exit', function(){
  process.stdout.write(`\nWell done, you got the right answer\n`)
})
