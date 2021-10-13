"use strict";

// 한 배열 안에는 동일한 데이터 타입의 값들을 넣는게 좋다.

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. index position
const fruits = ["🍎", "🍌"];
console.log(fruits);
console.log(fruits.length); // 2
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]); // undefined
console.log(fruits[fruits.length - 1]); // 마지막 index를 선택할때 많이 사용한다.

// 3. looping over an array
// print all fruits

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

// forEach는 배열 안에 있는 각각의 엘리먼트에 정해진 액션(콜백함수)을 수행한다.
// forEach에는 총 2가지의 파라미터가 전달되는데 하나는 콜백함수이며, thisArg?인데 ?가 있으면 전달해도 되고 하지 않아도 된다.
// 콜백함수에는 총 세가지의 인자가 들어온다.
// 첫번째는 배열의 값인 value, 값의 index, 전체적인 배열이 들어갈 수 있다.
// forEach에서는 보통 세번째로 받을 수 있는 배열 전체는 받아오지 않는다.
// forEach(callbackfn: (value: T, index: number, array: T[]) => void, thisArg?: any): void;
fruits.forEach(function (fruit, index, array) {
  console.log("he"); // 배열 안에 값이 두개이기 떄문에 두 번 출력
  console.log(fruit);
  console.log(fruit, index);
  console.log(fruit, index, array);
});

// 이름이 없는 함수는 화살표 함수로 표현 가능하며, 화살표 함수는 한 줄일 경우 {}도 생략 가능하다.
fruits.forEach((fruit) => console.log(fruit));

// 4. addtion, deletion, copy
// push: add an item to the end, 배열의 제일 뒤에 item을 넣을 떄
fruits.push("🍓", "🍑");
console.log(fruits);

// pop: remove an item from the end, 배열의 제일 뒤에서부터 item을 지울 때
fruits.pop(); // 복숭아 제거
console.log(fruits);
fruits.pop(); // 딸기 제거
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift("🍓", "🍋");
console.log(fruits);

// shift: remove an item to the beginning
fruits.shift(); // 딸기 제거
console.log(fruits);
fruits.shift(); // 레몬 제거
console.log(fruits);

// shift, unshift are slower than pop, push, shift와 unshift는 pop과 push보다 느리다.
// push와 pop은 배열의 뒤에 데이터를 추가하거나 제거하는 것이기 때문에 기존에 들어있는 값들은 움직이지 않는 반면 shift와 unshift는 배열의 앞에 데이터를 추가하거나 제거하는 것이기 때문에 기존에 들어있는 값들이 좌우로 한칸씩 움직여야한다. 그래서 배열이 길수록 오래 걸린다. 웬만하면 push와 pop을 사용하는 것이 좋다.

// splice: remove an item by index position
fruits.push("🍓", "🍑", "🍋");
console.log(fruits);

// fruits.splice(시작하는 인덱스, 몇개 지울건지 지정?)
// 몇개지울지 지정하지 않으면 지정한 index부터 뒤에 있는 모든 데이터를 지운다.
// fruits.splice(1);

// 두번째 인덴스를 지정했고, 한개만 지운다고 지정했으니 두번째 인덱스만 지운다.
// fruits.splice(1, 1);

// 인덱스를 지운 자리에 순서대로 값을 추가한다.
// fruits.splice(1, 1, '🍏', '🍉');

// 인덱스를 지우지 않고 그 자리에 순서대로 값을 추가한다.
// fruits.splice(1, 0, "🍏", "🍉");

// combine two arrays, 배열과 배열을 연결할 때
const fruits2 = ["🥥", "🍐"];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// indexOf: find the index, 해당하는 값이 몇번째 index인지 알 수 있다.
console.log(fruits.indexOf("🍎"));
// 해당하는 값이 없을 경우 -1로 출력된다.
console.log(fruits.indexOf("🥥"));

// includes, 해당하는 값이 배열에 포함되어 있는지 알 수 있다.
console.log(fruits.includes("🍎"));
// 해당하는 값이 없을 경우 false로 출력된다.
console.log(fruits.includes("🥥"));

// lastIndexOf
fruits.push("🍎");
console.log(fruits);
// 만약 배열 안에 같은 값이 있으면 제일 처음에 있는 index가 출력된다.
console.log(fruits.indexOf("🍎"));

// 만약 배열 안에 같은 값이 있으면 제일 마지막에 있는 index가 출력된다.
console.log(fruits.lastIndexOf("🍎"));
