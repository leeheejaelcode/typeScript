/* -------------------------------------------------------------------------- */
/*                                   generic                                  */
/* -------------------------------------------------------------------------- */
// 파라미터로 타입을 입력하는 함수
// generic함수의 장점
// 1. 확장성이 있습니다.
function generic<MyType>(x: MyType[]): MyType {
  return x[0];
}
// 타입파라미터 제한두기
// extends 오른쪽에 있는 속성을 가지고있는지 체크합니다.
function minusOne<MyType extends number>(x: MyType) {
  return x - 1;
}

let a = generic<number>([4, 2]);
let b = generic<string>(["바보", "2"]);
console.log(a);
console.log(b);

let c = minusOne<number>(100);
console.log(c);

// 커스텀 타입으로도 타입 파라미터 제한이 가능합니다.
interface LengthCheck {
  length: number;
}

function lengths<MyType extends LengthCheck>(x: MyType) {
  return x.length;
}

let d = lengths<string[]>(["바보", "2"]);
let e = lengths<string>("바보래요");

console.log(d);
console.log(e);

// 오늘 배운 내용
// 1. 함수에 타입파라미터 넣을 수 있음
// 2. extends 키워드로 넣을 수 있는 타입 제한가능
// 3. class에도 타입파라미터 넣을 수 있음

// (숙제2) Animal 이라는 타입이 있습니다.
// interface Animal {
//   name : string;
//   age : number
// }
// let data = '{"name" : "dog", "age" : 1 }'
// 그리고 data라는 변수도 있습니다. object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.

// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.

interface Animal {
  name: string;
  age: number;
}

let data = '{"name" : "dog", "age" : 1 }';

function parse<t>(data: string): t {
  return JSON.parse(data);
}

const tt = parse<Animal>(data);
console.log(tt);

// (숙제3) class 를 수정해봅시다.
// class Person {
//   name;
//   constructor(a){
//     this.name = a;
//   }
// }
// let a = new Person('어쩌구');
// a.name //any 타입이 되었넹
// 지금 만든 class는 new Person('어쩌구') 라고 분명 문자를 집어넣었는데 any 타입이 name 속성에 부여됩니다.

// 이게 싫어서 파라미터에 string을 집어넣으면 string 타입
// number를 집어넣으면 number 타입
// string[]을 집어넣으면 string[] 타입이 되게 하려면 위의 코드를 어떻게 수정해야할까요?
// 오늘 배운 Generic을 이용해봅시다.

class People<T> {
  name: T;
  constructor(a: T) {
    this.name = a;
  }
}
let g = new People<string>("어쩌구");
let h = new People<number>(123);
let i = new People<boolean>(false);
console.log(g.name); //any 타입이 되었넹
console.log(h.name); //any 타입이 되었넹
console.log(i.name); //any 타입이 되었넹
