import readline from"readline-sync";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: 3,
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: 2,
  },
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
  const q = questions[i];

  console.log(`\nQ${i + 1}: ${q.question}`);

  q.options.forEach((opt, index) => {
    console.log(`${index + 1}. ${opt}`);
  });

  const userAnswer = readline.question("Your answer (1-4): ");

  if (parseInt(userAnswer) === q.answer) {
    console.log("\x1b[32mCorrect!\x1b[0m");
    score++;
  } else {
    console.log(
      `\x1b[31mWrong! Correct answer is ${q.answer}\x1b[0m`
    );
  }
}

console.log(`\nFinal score: ${score}/${questions.length}`);