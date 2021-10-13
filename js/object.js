"use strict";

// object
// one of the javascript's data types
// a collection of related data and/or functionality
// nearly all objects in javascript are instances of object
// object = {key: value};
// 자바스크립트는 동적으로 type이 runtime때 결정되는 언어이며, runtime은 프로그램이 동작하고 있을때를 말한다.

// primitive type은 변수 하나당 값을 하나만 담을 수 있기 때문에 값들을 그룹으로 묶어 생각한다던지, 값을 추가 & 수정하기가 번거롭다. 그래서 이것을 개선하고자 object를 쓰는것이다.

// const name = "nandev";
// const age = 20;

// function print(name, age) {
//   console.log(name);
//   console.log(age);
// }

// print(name, age);

// 따로따로 있던 변수를 객체로 하면 한 변수 안에서 관리할 수 있다.
const nandev = { name: "nandev", age: 20 };

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

print(nandev);

// 1. literals and properties
// object를 만드는 방법
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax, Object에서 정의된 constructor가 호출된다.

// 자바스크립트에서는 위와 같이 class가 없어도 {}를 이용해 obejct를 생성할 수가 있는데, 그래서 생기는 어려움도 있다.
// 이렇게 뒤늦게 하나의 프러퍼티를 추가할 수 있다. 이렇게 동적으로 코딩하면 금방 코딩을 할 수 있다는 장점은 있지만, 나중에 유지보수가 힘들고 에러가 발생할 수 있기 때문에 가능하면 하지 않는게 좋다.
nandev.hasJob = true;
console.log(nandev.hasJob); // true

// 또한 삭제도 가능하다.
delete nandev.hasJob;
console.log(nandev.hasJob); // undefined

// 2. computed properties
// key should be always string
// object에 있는 데이터에 접근할 때 .을 이용해 접근이 가능하지만 다른 방법도 있다.
// nandev.name
// object안에 있는 변수의 이름을 ['string'] string 형태로 접근이 가능하다.
// nandev['name']

console.log(nandev.name);
console.log(nandev["name"]);
nandev["hasJob"] = true; // 이렇게 값을 추가할 수도 있다.
console.log(nandev.hasJob); // true;

// 사용 시기는 .은 코딩할 때 주로 사용하면 되고, []은 정확하게 어떤 key가 필요한지 모를 때, runtime에서 결정될 때,실시간으로 원하는 key의 값을 받아오고 싶을 때 사용하면 된다.

// 예를들어 obj와 key를 받아서 obj에 상응하는 key의 value를 출력하는 함수가 있다. 어떤 key를 받을지 모르며 원하는 key를 사용자에게 입력 받아서 출력해야하는 함수라면 코딩을 하는 시점에는 전혀 알수가 없다. 그래서 .으로 하면 obj 안에 key라는 property가 있는지 확인하는 것으로 작동해 undefined가 출력되기 때문에 이런 경우에는 []를 사용해야한다.
function printValue(obj, age) {
  // console.log(`obj.age: ${obj.age}`); // 인자 age가 아닌 object 안에 있는 age가 출력된다.
  // console.log(age); // 인자 age가 출력된다.
  console.log(obj[age]);
}

printValue(nandev, "age");

// 3. property value shorthand, value와 key가 같다면 하나만 작성해줘도 된다.
const person1 = { name: "bob", age: 2 };
const person2 = { name: "steve", age: 3 };
const person3 = { name: "dave", age: 3 };
const person4 = makePerson("nandev", 31);
console.log(person4);

// object를 필요할 때마다 만들게 되면 동일한 key와 value들을 반복해서 작성해야하는 문제점이 있다. 이럴땐 function을 이용한다.4. constructor function에서 이어진다.
function makePerson(name, age) {
  return {
    // value와 key가 같다면 하나만 작성해줘도 된다.
    name,
    age,
  };
}

// 4. constructor function
// constructor function은 js에 class가 없을때 많이 작성되었다.
// 대문자로 시작하도록 함수명을 만들고, return을 표기하지 않는다.
function Person(name, age) {
  // 생략된 것은 this = {};와 return this; 이다.
  // this = {};, 새로운 object를 만들어 this name이라는 새로운 프러퍼티를 넣고
  this.name = name;
  this.age = age;
  // return this;, 결국은 this를 return하는 함수이다.
}

// 호출할 때도 class에서 object를 만드는 것처럼 할 수가 있으며, 이렇게 하면 js에서 object를 생성해준다.
const person5 = new Person("ellie", 30);
console.log(person5);

// 5. in operator: property existence check (key in obj)
// 해당하는 object 안에 key가 있는지 확인하는 것이다.
console.log("name" in nandev);
console.log("age" in nandev);
console.log("random" in nandev);

// 6. for..in vs for..of
// for (key in obj)
// in 키워드를 사용하면 nandev가 가지고 있는 object의 key들이 for문의 {}을 돌때마다 key라는 지역변수에 할당이 된다.
// console.log를 이용해 log를 찍어보면 nandev가 가지고 있는 모든 key가 출력되는 것을 볼 수 있다.
// 모든 key를 받아와서 처리할 때 for in을 사용할 수 있다.
// 만약 'use strict'를 사용하지 않으면 key 앞에 let을 붙이지 않아도 동작한다.
for (let key in nandev) {
  console.log(key);
}

// for (value of iterable)
// 배열 안에 있는 값들을 출력할 때 예전에는 아래와 같이 사용했지만, 코드를 많이 작성해야해서 좋지는 않다.
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 그래서 of를 사용해 쉽게 값들을 출력할 수 있는데 array에 있는 값들이 value 안에 할당되어 사용할 수 있다.
for (let value of array) {
  console.log(value);
}

// 7. fun cloning
// Object.assign(dest, [obj1, obj2, ob3...])
// user라는 객체를 만들고 user2에 user를 할당하면 user2에는 user가 가지고 있는 레퍼런스가 동일하게 할당된다. 그렇기 떄문에 user2를 수정하면 user의 값도 변경된 걸 알 수 있다.
const user = { name: "nandev", age: "20" };
const user2 = user;
user2.name = "coder";
console.log(user); // name이 coder로 변경된 걸 알 수 있다.

// old way
const user3 = {};
for (let key in user) {
  user3[key] = user[key];
}
console.log(user3); // user와 똑같은걸 알 수 있다.

// Object는 자바스크립트에 기본적으로 탑재된 object중 하나이며, 모든 object는 이 Object를 상속하는 것이다.
// assign은 복사를 하려는 target과 복사될 source를 같이 전달해줘야하고, return값은 target과 source가 합쳐진 값이다.
// 소스를 하나 또는 복수를 넣을 수 있고 배열도 넣을 수 있으며, 뒤에 입력된 소스일 수록 더욱 우선순위를 가져 만일 앞과 뒤의 소스에 같은 값이 있다면 뒤에 것이 입력된다.

// const user4 = {};
// Object.assign(user4, user);
// console.log(user4);

// 위 또는 아래와 같이 작성할 수 있다.
const user4 = Object.assign({}, user);

// 뒤에 입력된 소스일 수록 더욱 우선순위를 가져 만일 앞과 뒤의 소스에 같은 값이 있다면 뒤에 것이 입력된다.
const fruit1 = { color: "red" };
const fruit2 = { color: "blue", size: "big" };
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
