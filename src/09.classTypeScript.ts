// class 필드값(constructor와 똑같은 역할)

// constructor의 return 값은 타입을 지정할 이유가없습니다.
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  // prototype 함수에도 타입을 지정하여 사용이 가능합니다.
  hello() {
    console.log("안녕" + this.name);
  }
  bye(imoji: string) {
    console.log("잘가 " + this.name + imoji);
  }
}

let 사람1 = new Person("kim");
let 사람2 = new Person("lee");

사람1.hello();
사람2.hello();

사람1.bye("😢");
사람2.bye("😢");

// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은 .tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오. tax() 함수의 return 타입도요.

class Car {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
  tax(): number {
    return this.price * 0.1;
  }
}

let car1 = new Car("소나타", 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300

// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다. 그리고 타입 빼먹지 마셈

class Word {
  num: number[] = [];
  str: string[] = [];
  constructor(...rest: (string | number)[]) {
    rest.forEach((item) => {
      if (typeof item === "string") {
        this.str.push(item);
      } else {
        this.num.push(item);
      }
    });
  }
}

let obj = new Word("kim", 3, 5, "park");
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
