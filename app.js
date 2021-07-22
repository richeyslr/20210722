// declaring an array of my favorite grizzlies to use later
let favGrizzlies = ["shane battier", "ja morant", "tony allen", "pau gasol", "mike conley", "stromile swift", "mike miller", "vince carter", "zach randolph", "jason williams"];
// declaring array containing questions
let quizQuestions = ["Was I born and raised in Memphis, TN?", "Am I a big fan of the Auburn Tigers?", "Is my favorite sport tennis?", "Do I think Playstation is the best console to game on?", "Do I like to read?", "How old was I when I first started playing tennis? You have 4 tries.", "Can you name one of my 10 favorite Memphis Grizzlies players?"];
// declaring array for correct answers in first 5 questions
let quizAnswers = [["n", "no"], ["n", "no"], ["yes","y"],["no","n"],["yes","y"]];
// lopping through first 5 questions
let correctGuesses = 0;

// runs the greeting function, which asks the user their name and greets them to the page
function greeting(){
  let userName = prompt("Hi! What is your name?");
alert("Welcome to my About Me Site, " + userName + ".");
alert("You are about to take a quiz, " + userName + ", but you might not know the answers yet! Make your best guess.");
}

function takeQuiz(){
  for (i = 0; i < 5; i++){
    let userAnswers = prompt(quizQuestions[i]).toLowerCase();
    if (userAnswers == quizAnswers[i][0] || userAnswers == quizAnswers[i][1]){
      alert("Correct!");
      correctGuesses++;
    }
    else {
      alert("Incorrect!");
    }
  }
  for (i=0; i < 4; i++){
  let answerSix = prompt(quizQuestions[5]);
  if (answerSix >= 8){
    alert("Too high");
  }
  else if (answerSix <= 6){
    alert("Too low");
  }
  else if (answerSix == 7){
    alert("Correct!");
    correctGuesses++;
    break;
  }
 }
 alert("The correct answer was 7!");
 for (i=0; i < 6; i++){
  let answerSeven = prompt(quizQuestions[6]).toLowerCase();

  // compares the user's guess to the index of my favorite grizzlies array and returns position in the array. if answer not in the array returns -1.
  if (favGrizzlies.indexOf(answerSeven) > -1 || favGrizzlies.indexOf(answerSeven) > favGrizzlies.length - 1){
    alert("Correct! He's definitely in my top 10!");
    correctGuesses++;
    break;
  }
  else {
    alert("Sorry, he didn't make the cut.");
  }
}
alert(`You guessed ${correctGuesses} out of 7 correctly!`);
}

greeting();