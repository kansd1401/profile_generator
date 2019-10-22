const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = {
  0: {
    question: "What's your name? Nicknames are also acceptable :)",
    answer: null
  },
  1: {
    question: "What's an activity you like doing?",
    answer: null
  },
  2: {
    question: "What do you listen to while doing that?",
    answer: null
  },
  3: {
    question: "Which meal is your favourite (eg: dinner, brunch, etc.)",
    answer: null
  },
  4: {
    question: "What's your favourite thing to eat for that meal?",
    answer: null
  },
  5: {
    question: "Which sport is your absolute favourite?",
    answer: null
  },
  6: {
    question: "What is your superpower? In a few words, tell us what you are amazing at!",
    answer: null
  }
};


const makeParagraph = questions => {
  return `${questions['0'].answer} loves listening to ${questions['2'].answer} while ${questions['1'].answer}, devouring ${questions['4'].answer} for ${questions['3'].answer}, prefers ${questions['5'].answer} over any other sport, and is amazing at ${questions['6'].answer}.`;
};

const askQuestions = index => {
  if (index < Object.keys(questions).length) {
    rl.question(questions[index].question, (answer) => {
      console.log(`Thanks for your answer: ${answer}`);
      questions[index].answer = answer;
      askQuestions(index + 1);
    });
  } else {
    console.log(makeParagraph(questions));
    rl.close();
  }
};

askQuestions(0);