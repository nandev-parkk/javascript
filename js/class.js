"use strict";

// Object-oriented programming, 객체지향언어
// class: template, 설계도 또는 무언가를 찍어내는 틀이다.
// object: instance of a class, class로 찍어내는 실제 상품이다.
// javascript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. class declarations
class Person {
  // constructor, 오브젝트를 만들 때 필요한 데이터
  constructor(name, age) {
    //fields
    this.name = name;
    this.age = age;
  }

  // methods
  speak() {
    // this는 생성된 object를 의미하기 때문에 nandev의 이름이 출력되는 것이다.
    console.log(`${this.name}: hello!`);
  }
}

const nandev = new Person("nandev", 22);
console.log(nandev.name);
console.log(nandev.age);
nandev.speak();

// 2. getter and setters
// 아래와 같이 만약 어떤 유저가 age를 -1로 입력한다면 말이 되지 않을 것이다. 이럴 때 사용하는 것이 바로 getter와 setter인데 get을 이용해 값을 리턴하고, set을 이용해 값을 설정할 수 있으며, set은 값을 설정하기 때문에 value를 받아와야한다.
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // get과 set 안에서 _가 붙은 변수명(_age)이 아닌 똑같은 변수명(age)를 쓰면 call stack이 초과되었다는 error가 나오게 되는데, 그 이유는 getter를 정의하는 순간 위의 this.age는 메모리에 할당된 값이 아닌 getter를 호출하게 되며, 또한 setter를 정의하는 순간 위의 this.age에 할당된 = age;는 바로 메모리의 값을 할당하는 것이 아니라 setter를 호출하게 된다. 그렇기 때문에 계속해서 setter를 호출해 call stack이 초과되었다는 error가 나오는 것이다. 이것을 방지 하기 위해 getter와 setter에서 사용하는 변수의 이름을 다른 것으로 만들어줘야 하기 때문에 _를 붙인 것이다.

  // constructor에서 선언한 this.age는 get에서 선언한 age를 가리킨다.
  get age() {
    // _를 이용해
    return this._age;
  }

  // constructor에서 this.age에 할당한 age는 set에서 선언한 age를 가리킨다.
  set age(value) {
    // if (value < 0) {
    //   throw Error("age can not be negative");
    // }

    // 또는

    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User("steve", "jobs", -1);
console.log(user1.age); // 0

// 3. fields (public, private);
// too soon, 최근에 추가되어 아직 많이 사용하지는 않음
class Experiment {
  // constructor(생성자)를 쓰지 않고  field를 정의할 수 있는데 그냥 쓰면 public으로 외부에서 접근 가능하며, #을 붙이면 private으로 class 내부에서만 접근 가능하다.
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static properties and methods
// too soon, 최근에 추가되어 아직 많이 사용하지는 않음
// static을 사용하면 class를 사용하는 오브젝트가 아닌 class 자체의 값으로 여겨진다.
class Article {
  static publisher = "Dream Coding";
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(article1.publisher); // undefined
console.log(Article.publisher);
Article.printPublisher();

// 5. inheritance, 상속 & 다양성
// a way for one class to extend another class
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`draw ${this.color} color!`);
  }

  getArea() {
    return this.width * this.height;
  }
}
// rectangle이라는 class를 또 만들기 보다는 extends를 이용해 Shape에 정의된 모든 값들을 그대로 사용할 수 있다.
class Rectangle extends Shape {}
class Triangle extends Shape {
  // 함수를 overriding하면 부모 class에서 정의한 함수도 실행되면서 재정의한 함수도 실행되게 하려면 재정의한 함수 안에서 super(부모).draw();라고 하면 된다.
  draw() {
    super.draw();
    console.log("🔺");
  }

  // 필요한 함수만 재정의해서 사용할 수 있으며, 이것을 overriding이라고 한다.
  getArea() {
    return (this.width * this.height) / 2;
  }
}

const rectangle = new Rectangle(20, 20, "blue");
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, "red");
triangle.draw();
console.log(triangle.getArea());

// 6. class checking: instanceOf
// Object는 class를 이용해 만들어진 새로운 instance이다. instanceof는 왼쪽에 있는 object가 오른쪽에 있는 class의 instance인지 아닌지 확인한다.
console.log(rectangle instanceof Rectangle); // true
console.log(triangle instanceof Rectangle); // false
console.log(triangle instanceof Triangle); // true
console.log(triangle instanceof Shape); // true
console.log(triangle instanceof Object); // true, 우리가 만든 모든 object class들은 javascript의 Object를 상속한 것이기 때문에 true이다.

// 자바스크립트 built-in object: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
