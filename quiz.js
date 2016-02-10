// quiz begins with no answers correct 
var correctAnswers = 0;

// ask questions
var answer1 = prompt('Are you currently breathing?');
if (answer1.toUpperCase() === 'YES') {
  correctAnswers += 1;
}
var answer2 = prompt('Are computers made of wood?');
if (answer2.toUpperCase() === 'NO') {
  correctAnswers += 1;
}
var answer3 = prompt('How many days are there in a leap year?');
if (answer3 === '366') {
  correctAnswers += 1;
}
var answer4 = prompt('True or False, there are mice inside your computer.');
if (answer4.toUpperCase() === 'FALSE') {
  correctAnswers += 1;
}
var answer5 = prompt('How many letters are there in the word LOVE?');
if (answer5.toUpperCase() === 'FOUR' || answer5 === '4') {
  correctAnswers += 1;
}

// output results
document.write('<p><strong>You correctly answered ' + correctAnswers + ' questions. </strong></p>');

// output rank
if (correctAnswers === 5) {
  document.write('<p><strong>Congratulations! You just earned a gold crown!</strong></p>');
} else if (correctAnswers >= 3) {
  document.write('<p><strong>Nice job! you just earned a silver crown!</strong></p>');
} else if (correctAnswers >= 1) {
  document.write('<p><strong>You get a bronze crown.</strong></p>');
} else {
  document.write('<p><strong>Yikes. That\'s not so good. Are you sure you have mice inside your wooden computer?</strong></p>');
}
