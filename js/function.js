"use strict";

// function
// fundamental building block in the program
// subprogram can be used multiple times
// performs a task or calculates a value

// 1. function declaration
// function name(param1, param2) {body... return;}
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint => createCard, createPoint
// function is object in JS => object이기 때문에 변수에 할당할 수도 있고, 파라미터로 전달할 수도 있고, 함수를 return 할수도 있게 된다.

function printHello() {
  console.log("Hello");
}

printHello();

function log(message) {
  console.log(message);
}

log("Hi");
log(1234); // 문자열로 변환되어 출력된다.

// 2. parameters
// premitive parameters: passed by value, 메모리에 값이 저장되어 있기 때문에 값이 전달
// object parameters: passed by reference, 메모리에 reference가 저장되어 있기 때문에 reference가 전달

function changeName(obj) {
  obj.name = "coder";
}

const nandev = { name: "nandev" };
changeName(nandev);
console.log(nandev);

// 3. default parameters(added in ES6)
function showMessage(message, from = "nandev") {
  console.log(`${message} by ${from}`);
}

// 최근에는 from이 지정되지 않았을 때를 대비해 위와 같이 from 옆에 기본값을 작성하면 되지만 예전에는 from이 지정되지 않았을 때를 대비해 아래와 같이 코드를 짰었다.
// function showMessage(message, from) {
//   if(from === undefined) {
//     from = 'nandev';
//   }
//   console.log(`${message} by ${from}`); // Hi! by nandev
// }

showMessage("Hi!", "nandev"); // from parameter 옆에 아무 값도 없다면 from parameter로 전달되는 값이 없기 때문에 Hi! by undefiend로 출력되고 from 옆에 기본값이 있다면 Hi! by 기본값으로 출력된다.
showMessage("Hi!", "coder"); // 기본값이 있어도 coder로 출력된다.

// 4. rest parameters (added in ES6)
// ...args 이렇게 ...이 붙으면 rest parameters라고 부르며, 배열 형태로 전달된다.

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  // arg 안에 args들이 들어간다.
  // for (const arg of args) {
  //   console.log(arg);
  // }

  // arg 안에 args들이 들어간다.
  // args.forEach((arg) => console.log(arg));
}

printAll("hello", "nandev", "coder");

// 5. local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다.
let globalMessage = "global"; // global variable
function printMessage() {
  let message = "hello"; // local variable
  console.log(message);
  console.log(globalMessage);
  function printAnoterMessage() {
    console.log(message);
    let childMessage = "hi";
  }
  // console.log(childMessage); // error
  // 함수에서 return이 없는 함수들은 이렇게 undefined와 마찬가지로, 생략이 가능하다.
  return undefined;
}

printMessage();
// console.log(message); // error

// 6. return a value
// 함수에서는 parameters로 값들을 전달 받아서 계산된 값을 return 할 수 있다.
function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${result}`);

// 7. early return, early exit, 빨리 리턴하고 빨리 나와라
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  // 조건이 맞지 않을 때는 빨리 return해서 함수를 종료하고, 조건이 맞을때만 코드가 실행되게 하는게 좋다.
  if (user.point <= 10) {
    return;
  }
  // long upgrade logic...
}

// first-class function
// functions are treated like any other variable
// can be assigned as a value to variable, 변수에 할당이 되고
// can be passed as an argument to other functions, 함수의 인자로 전달이 되고
// can be returned by another function, 함수의 리턴값으로도 리턴이 된다.

// 1. function expression
// a function declaration can be called earlier than it is defined. (hoisted), 기본 함수 형태로 작성된 함수는 호이스팅 되어 선언하기 전에 호출해도 실행이 된다.
// a function expression is created when the execution reaches it., expression 형태의 함수는 선언이 되어야 실행이 가능하며, 선언되지 않았는데 호출하면 error가 발생한다.

// 아래와 같이 함수에 이름이 없는 함수를 anonymous function이라고 한다.
const print = function () {
  console.log("print");
};

// 원한다면 함수 이름을 넣을 수도 있으며, named function이라고 한다.
// const print = function print() {
//   console.log("print");
// };
print();

const printAgain = print;
printAgain();

const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. callback function using function expression
// 함수를 인자에 전달해서 조건이 맞으면 부르는 함수를 콜백함수라고 한다.
function randomQuiz(answer, print1, print2) {
  if (answer === "love you") {
    print1();
  } else {
    print2();
  }
}

// anonymous function
const printYes = function () {
  console.log("yes!");
};

// named function
// 이렇게 expression에서 이름을 쓰는 경우는 debugging을 할 때 debugging의 stack traces에 함수 이름이 나오게 하기 위해서 쓰거나 함수 안에서 자신 스스로 또다른 함수를 호출할 때 사용한다. 이렇게 함수 안에서 자기 스스로를 부르는 것을 recursions이라고 하며 정말 필요할 때만 사용하는 것이 좋다.
const printNo = function print() {
  console.log("no!");
  // print(); // 계속해서 함수가 호출되며 call stack이 꽉 찼다는 error가 발생한다.
};

randomQuiz("love you", printYes, printNo);
randomQuiz("wrong", printYes, printNo);

// arrow function
// always anonymous, 항상 이름이 없는 함수이다.

// function expression
const simpleprint = function () {
  console.log("simplePringt!");
};

// 아래와 같이 표현 가능하다.
// 한 줄인 경우에는 block 없이 작성이 가능하다.
const simplePrint = () => console.log("simplePringt!");

// 조금 더 복잡한 코드가 들어간다면 block을 사용한다.
const simpleMultiply = () => {
  // do something more
  console.log("simplePringt!");
};

// return 값이 들어간 function expression
const add = function (a, b) {
  return a + b;
};

// 아래와 같이 표현 가능하다.
// block을 사용하지 않을 경우 return 키워드를 사용하지 않아도 된다.
const added = (a, b) => a + b;

// block을 사용하면 return 키워드를 사용해야 한다.
const simpleMultiplied = (a, b) => {
  // do something more
  return a + b;
};

// IIFE: Immediately Invoked Function Expression
// 함수를 선언하면 실행하기 위해 따로 호출해줘야 하지만 함수 선언을 ()로 묶고 ()를 붙이면 바로 호출이 된다.
// 최근에는 많이 사용하지 않지만 바로 실행하고 싶을 때 유용하다.
function hello() {
  console.log("IIFE");
}

hello();

(function hello() {
  console.log("IIFE");
})();

// quiz
// 커맨트(연산)를 받아서 a와 b에 할당된 숫자값을 처리해라

function calculate(command, a, b) {
  switch (command) {
    case "*":
      console.log(`곱하기: ${a * b}`);
      break;
    case "+":
      console.log(`더하기: ${a + b}`);
      break;
    case "-":
      console.log(`빼기: ${a - b}`);
      break;
    case "/":
      console.log(`나누기: ${a / b}`);
      break;
    case "%":
      console.log(`나머지: ${a % b}`);
      break;
    default:
      console.log("연산자를 입력하세요");
  }
}

calculate("*", 5, 10);

// ellie's solution

// function calculate(command, a, b) {
//   switch (command) {
//     case "add":
//       return a + b;
//     case "substract":
//       return a - b;
//     case "divide":
//       return a / b;
//     case "multiply":
//       return a * b;
//     case "remainder":
//       return a % b;
//     default:
//       throw Error("unknown command");
//   }
// }

// console.log(calculate("add", 5, 10));
