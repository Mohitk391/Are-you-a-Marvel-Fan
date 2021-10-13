var readLineSync = require('readline-sync');
var name = readLineSync.question("What is your name? ");
console.log(`Let us see how well do you about Marvel Comics..`);
console.log(`P.s.- This quiz is based on MCU and not of Marvel Comics.`);
var Questions = [{
  question : "Who found Steve Rogers frozen in ice? ",
  answer : "Howard Stark"
},
{
  question : "Where is the New Avengers facility located? ",
  answer : "New York"
},
{
  question : "What game were Thor and Korg were playing in Avengers Endgame? ",
  answer : "Fortnite"
},
{
  question : "Who rescued Antman from the Quantum Realm? ",
  answer : "Rat"
}, 
{
  question : "With whom Thor went to asgard during the Time-Heist? ",
  answer : "Rocket"
},
{
  question : "In what year did Tony and Steve travelled to get Tesseract? ",
  answer : "1970"
},
{
  question: "What is the wifi password in Kamar-Taj? ",
  answer : "Shamballa"
},
{
  question: "What is the name Scott gave to one ant? ",
  answer : "Anthony"
},
{
  question: "What is Pepper Potts allergic to? ",
  answer : "Strawberry"
},
{
  question: "What was the song name Tony played during his arrival in Avengers 1? ",
  answer : "Shoot To Thrill by AC/DC"
}
];
var score = 0;
//High Score List
var highScoreList = [
  {
    name : `First`,
    score: 5
  },
  {
    name : `Second`,
    score : 4
  }, 
  {
    name : `Third`,
    score : 3
  },
  {
    name : `Fourth`,
    score : 2
  },
  {
    name : `Fifth`,
    score : 1
  }
];

// Function to ask question, take response and check it //against the correct answer
function quiz(question, answer){
  var yourAnswer = readLineSync.question(question);
  if(yourAnswer.toUpperCase() === answer.toUpperCase()){
    score++;
    console.log(`You're correct!!`);
  }
  else {
    console.log(`You're Wrong. It's ${answer}`);
  }
}
var length = Questions.length;
for(var i=0;i<length;i++){
  quiz(Questions[i].question, Questions[i].answer);
}
var flag=true;
var index=4;

while(flag && index>0){
  if(score>highScoreList[index].score){
    index--;
  }
  else {
    index++;
    flag=false;
  }
}
console.log(`Your final score is: ${score}`);
if(index<=4){
  console.log(`${name} is ${index+1} in our highscore list. Congratulations!!`);
}
else {
  console.log(`Sorry ${name}, you didn't made it to top 5 in our high score list. Better luck next time!!`);
}