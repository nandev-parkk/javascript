// 1. use strict를 사용하면 조금 더 엄격하게 js를 사용할 수 있다.
"use strict";

// 2. variable(mutable, 변경 가능한), rw(read/write)
// js에서 변수를 선언하는 방법으로 var과 let이 있으며 let은 ES6에서 추가된 문법이다. 변수를 사용하면 데이터 재할당이 가능하다.
// {} 안에 변수를 선언하는 것을 block scope라고 하며, 밖에 선언하는 것을 global scope라고 한다. block scope로 변수를 선언하면 외부에서 접근이 불가능하다.
// var은 더이상 사용하지 않는데, 그 이유는 프로그래밍시 변수를 선언하고 값을 할당하는 것이 기본 원칙이지만 var은 할당을 먼저하고 변수를 선언해도 호이스팅으로 인해 변수 선언이 코드의 맨 위로 올라가게 된다. 즉 할당 보다 선언이 나중에 되어도 선언이 먼저 된 것으로 간주되는 것이며, 이렇게 되면 아직 선언도 되지 않은 변수에 값을 할당하게 되어 에러를 유발하기 쉽고, {} 안에 선언을 해도 외부에서 접근이 가능해 변수의 값이 변경될 위험에 더 노출된다.
// global한 변수들은 애플리케이션이 실행되고 끝날때까지 항상 메모리에 탑재되어 있기 때문에 최소한으로, 가능하면 필요한 부분에만 사용하는 것이 좋다.

{
  let name = "nandev";
  console.log(name); // nandev
}

// console.log(name); // undefined error

// 3. constant(immutable, 변경 불가능한), r(read only)
// 변수는 데이터 재할당이 가능하지만 상수는 한번 선언 후 값을 할당하면 재할당이 불가능하다.

const number = 1;

// 4. variable types
// 어떤 프로그래밍 언어의 데이터 타입이든 primitive type과 object type 두가지로 나뉘어져있다.
// primitive type은 더 이상 작은 단위로 나뉘어질 수 없는 한 가지 item을 말하며, number, string, boolean, null, undefined, symbol이 있다.
// object type은 싱글 아이템들을 묶어서 한 단위로 관리하는 것이다.
// primitive type은 값(value) 자체가 메모리에 저장되고, object type은 값이 아닌 reference가 저장되며, reference가 실제 object에 담긴 값을 가리킨다.
// js에서는 함수도 데이터 타입 중 하나로, 변수에 할당이 가능하고, 함수의 인자로 전달 되며, 함수의 리턴 타입으로 함수 전달이 가능하다. 이를 first-class function이라고 한다.
// data type에는 immutable과 mutalbe type 두 가지가 있다. immutable type은 primitive type들과 frozen objects가 해당되며, mutable type은 모든 object가 해당된다.

// number
const infinity = 1 / 0;
console.log(infinity); // infinity

const negativeInfinity = -1 / 0;
console.log(negativeInfinity); // -infinity

const nAn = "not a number" / 2;
console.log(nAn); // NaN

// js에서는 -2*53 ~ 2*53 범위의 숫자만 표현가능하며 이를 보완하기 위해 bigInt가 나왔다.
// js에서 추가된 숫자 데이터 타입으로 숫자 뒤에 n을 붙여주면 bigInt 타입으로 선언된다.
// safari에서는 인식하지 못한다.
const bigInt =
  1283910258417238192471029381057123728934283572893478923798273984728934728734972834792189237n;
console.log(typeof bigInt); // bigint

// string
const myName = "nandev";
console.log("안녕 " + myName); // 안녕 nandev

// ``(백틱)을 이용한 방법으로, template literals라고 한다.
console.log(`안녕 ${myName}`); // 안녕 nandev

// boolean
// false: 0, null, undefined, NaN, ''(빈 문자열)
// true: any other value
const num = 3 < 1;
console.log(num); // false

// null
// null은 의도적으로 아무 값도 넣지 않을 때 사용한다.
let nothing = null;
console.log(nothing); // null

// undefined
// undefined는 변수는 선언되었지만 값이 할당되지 않았을 때 출력된다. null과 같이 의도적으로 undefined를 할당해 사용해도 된다.
let i;
let x = undefined;
console.log(i); // undefined
console.log(x); // undefined

// symbol
// symbol은 map이나 다른 자료구조에서 고유한 식별자가 필요하거나 동시다발적으로 일어날 수 있는 코드에서 우선순위를 주고 싶을 때 사용한다.
// 아래와 같이 symbol1과 symbol2에 동일한 id라는 string type의 값을 주어도 symbol1과 symbol2가 다르다는 것을 알 수 있으며, 동일한 값이라면 for를 이용할 수 있다.
// symbol을 바로 출력하면 symbol 자체가 출력되는데, 뒤에 .description을 붙여 string type으로 변환해 출력해야 한다.
const symbol1 = Symbol("id");
const symbol2 = Symbol("id");

console.log(symbol1 === symbol2); // false

const symbol3 = Symbol.for("id");
const symbol4 = Symbol.for("id");

console.log(symbol3 === symbol4); // true

console.log(symbol1); // Symbol(id)
console.log(symbol1.description); // id

// 5. dynamic typing(dynamically typed language)
// js에서는 변수 선언시 데이터 타입을 명확하게 명시하지 않기 때문에 중간에 재할당이 가능하다. 만약 큰 프로젝트에 많은 개발자들이 참여한다면, 누가 언제 값을 변경하지 몰라 error를 발생시키기도 한다.

let text = "hello";
console.log(text); // hello

text = 1;
console.log(text); // 1

text = "7" + 5;
console.log(text); // string 75

text = "8" / "2";
console.log(text); // number 4
