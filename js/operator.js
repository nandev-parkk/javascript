"use strict";

// 1. string concatenation
console.log("my" + "cat"); // my cat
console.log("1" + 2); // string 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

// 2. numberic operators
console.log(1 + 1); // add
console.log(1 - 1); // substract
console.log(1 / 1); // divide
console.log(1 * 1); // multiply
console.log(5 % 2); // remainder, 나누고 나머지 값
console.log(2 ** 3); // exponentiation, 2의 3승

// 3. increment and decrement operators(증감 연산자)
let counter = 2;
const preIncrement = ++counter; // 숫자를 +1 한 후 변수에 할당한다. 아래 코드와 같다.
// counter = counter + 1;
// preIncrement = counter;

console.log(preIncrement); // 3

const postIncrement = counter++; // 변수에 할당한 후 숫자를 +1 한다. 아래 코드와 같다.
// postIncrement = counter;
// counter = counter + 1;

console.log(postIncrement); // 3

// --도 같은 원리로 동작한다.

// 4. assignment operators(할당 연산자)
let x = 3;
let y = 6;
console.log((x += y)); // 9, x = x + y;
console.log((x -= y)); // 3, x = x - y;
console.log((x *= y)); // 18, x = x * y;
console.log((x /= y)); // 3, x = x / y;

// 5. comparison operators
console.log(10 < 6); // 작거나
console.log(10 <= 6); // 작거나 같거나
console.log(10 > 6); // 크거나
console.log(10 >= 6); // 크거나 같거나

// 6. logical operators: || (or), && (and), ! (not)
// || 연산자는 조건으로 value나 expression가 들어갈 수 있고 그 중 하나라도 true이면 true로 계산되는 연산자이다. ||는 처음 조건이 true이면 뒤에 것들은 연산하지 않고 멈춘다. 왜냐하면 ||는 true가 하나만 나와도 자신을 true로 생각하기 때문이다. 그렇기 때문에 연산을 많이 하는 무거운 expression을 제일 앞에 두는 것은 좋지 않고 가벼운 것을 최우선으로 앞에 두되 앞의 조건들이 false 일때만 어쩔 수 없이 넣어주는 것이 좋다.

// && 연산자는 조건으로 value나 expression가 들어갈 수 있고 그 중 하나라도 false이면 false로 계산되는 연산자이다. || 연산자와 반대로 처음 조건이 false이면 뒤에 것들은 연산하지 않고 멈춘다. 또한 || 연산자와 마찬가지로 무거운 expression들은 최대한 뒤쪽으로 보내는 것이 좋다. && 연산자는 null check를 할 때도 많이 사용하는데, 앞의 조건이 false이면 뒤쪽은 연산을 하지 않기 때문에 앞의 조건이 null이 아닐때만 뒤의 조건이 연산되도록 할 수 있다.

// !(not) 연산자는 값을 반대로 바꿔준다.

const value1 = false;
const value2 = 4 < 2;

// || (or)
// value1과 2는 false이기 때문에 출력되지 않고 check() 함수는 true이기 때문에 true가 하나만 출력된다.
console.log(`or: ${value1 || value2 || check()}`);

// && (and)
// value1이 false이기 때문에 false가 하나만 출력된다.
console.log(`and: ${value1 && value2 && check()}`);

// ! (not)
// value1이 false이기 때문에 true로 변경되여 true가 출력된다.
console.log(`not: ${!value1}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log("ㅠㅠ");
  }
  return true;
}

// 7. equality operators
// ==는 데이터 타입이 달라도 값이 같으면 true로 반환된다.
// ===는 데이터 타입과 값이 같아야만 true로 반환된다.
// 주의할 점은 객체는 객체의 값이 메모리에 바로 할당되는 것이 아니라, 메모리에는 reference가 할당되고 메모리에 할당된 reference가 객체에 할당된 값을 가리킨다고 했다. 그렇기 때문에 아래 nandev1과 nandev2는 똑같이 값이 들어간 객체이지만 메모리에 각각 다른 reference가 할당되기 때문에 같은 값인지 연산해보면 false가 나온다. 반면 nandev3에는 nandev1을 할당해 reference가 똑같기 때문에 true가 나온다.

const stringFive = "5";
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive); // true
console.log(stringFive != numberFive); // false

// === strict equality, no type conversion
console.log(stringFive === numberFive); // false
console.log(stringFive !== numberFive); // true

const nandev1 = { name: "nandev" };
const nandev2 = { name: "nandev" };
const nandev3 = nandev1;
console.log(nandev1 == nandev2); // false
console.log(nandev1 === nandev2); // false
console.log(nandev1 === nandev3); // true

console.log(0 == false); // true
console.log(0 === false); // 0은 false로 간주되지만 data type은 숫자이기 때문에 false
console.log("" == false); // true
console.log("" === false); // ''는 false로 간주되지만 data type은 문자열이기 때문에 false
console.log(null == undefined); // true
console.log(null === undefined); // null과 undefined는 다른 data type이기 때문에 false

// 8. conditional operators: if
// if, else if, else
// if(조건) {
//  위의 조건이 참이면 실행할 코드
// } else if(조건) {
//  위의 조건이 참이면 실행할 코드
// } else {
//  그 밖에 위의 조건에 해당하지 않으면 실행할 코드
// }

const myName = "coder";

if (myName === "nandev") {
  console.log("hi, nandev");
} else if (myName === "coder") {
  console.log("hi, coder");
} else {
  console.log("who are you");
}

// 9. ternary operator: ?(삼항 연산자)
// 조건 ? 조건이 true이면 실행할 코드 : 조건이 false이면 실행할 코드
// 삼항연산자 안에 상항연산자를 여러번 넣어 사용하는 것은 좋지 않다. 이럴 경우 if나 switch문을 사용하는 것이 좋다.
console.log(myName === "nandev" ? "hi, nandev" : "hi, unknown");

// 10. switch statement
// use for multiple if checks, use for enum-like value checks, use for multiple type checks in TS
// if문에서 else if를 여러번 반복해야 한다면 switch문을 사용하는 것에 대해 고려하는게 좋고, TS에서 정해져 있는 type을 검사하거나 enum 비슷한 것들을 검사할 때는 switch문을 사용하는 것이 가독성이 좋다.

// switch (조건) {
//  case 값:
//    실행할 코드
//    break;
//  case 값:
//  case 값: 두개의 case에서 실행할 코드가 같으면 case를 묶을 수도 있다.
//    실행할 코드
//  default:
//    값과 일치하는 case문이 없다면 기본적으로 실행할 코드
// }

const browser = "IE";

switch (browser) {
  case "IE":
    console.log("go away");
    break; // 참이면 여기서 멈추고 뒤의 문으로 넘어가지 않음
  case "chrome":
  case "safari":
    console.log("love you");
    break;
  case "firefox":
    console.log("like you");
    break;
  default:
    console.log("same all");
    break;
}

// 11. loops
// while문은 조건이 false가 될 때까지 무한 반복한다.
// while(조건) {
//  실행할 코드
// }
// do while은 코드를 우선 실행하고 조건을 검사한다.
// do {
//  실행할 코드
// } while (조건);
// 블럭을 먼저 실행하고 싶다면 do while을 조건이 true일때만 코드를 실행하고 싶다면 while을 사용해야한다.

let i = 3;

while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// 위의 while문을 실행해 이미 i가 0이 되었지만 do로 먼저 코드를 실행하고 조건을 검사하기 때문에 0이 출력된다.
do {
  console.log(`while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)

// for(begin; 조건; step) {
//  실행할 코드
// }

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
}

// nested loops
// while이나 for문 안에 for문을 넣어 사용할 수 있다.
// 아래 같은 경우 i가 0이면 j가 0-9까지 한번 돌고, 다시 i가 1이면 j가 0-9까지 돌게된다.
// 이렇게 작성하는 것은 O(n2)인데 CPU에 좋지 않아 피하는 것이 좋다.
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}

// 1. 0부터 10까지 돌면서 짝수를 만나면 출력하고 홀수는 continue를 이용해 넘어가라.
for (let i = 0; i < 11; i++) {
  if (i % 2 !== 0) {
    continue;
  }
  console.log(i);
}

// 또는

for (let i = 0; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// 2. 0부터 10까지 돌다가 8을 만나면 break를 이용해 멈춰라.
for (let i = 0; i < 11; i++) {
  if (i > 8) {
    break;
  }
  console.log(i);
}
