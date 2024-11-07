let userAnswer = prompt('Яка “офіційна” назва JavaScript?');

if (userAnswer.includes('ECMAScript')) {
    console.log("Правильно!");
} else {
    console.log("Ви не знаєте? ECMAScript!");
}