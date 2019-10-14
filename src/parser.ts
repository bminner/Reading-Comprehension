interface Test {
  answers: string[];
  options: string[][];
  questions: string[];
  article: string;
}

let json: Test = require('../test.json');
console.log(json.answers);