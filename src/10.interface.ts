/* -------------------------------------------------------------------------- */
/*                                  interface                                 */
/* -------------------------------------------------------------------------- */

// object의 타입지정시에 interface 사용이 가능합니다.
interface Square {
  color: string;
  width: number;
}

let 네모 = {
  color: "red",
  width: 100,
};

// extend을 사용하면 interface를 확장 시킬 수 있습니다
interface Student {
  name: string;
}

interface Teacher extends Student {
  age: number;
}

let 학생: Student = {
  name: "Kim",
};
let 선생: Teacher = {
  name: "Kim",
  age: 30,
};

// typeAlias도 & 기호(intersection type)를 사용하면 확장이 가능합니다
// &기호와 interface의 extend와 다른점
// &기호는 두 타입을 전부 만족하는 타입이라는 뜻 입니다.
type Animal = { name: string };
type Cat = Animal & { age: number };

let 동물: Cat = {
  name: "냥이",
  age: 3,
};

// type vs interface
// interface는 중복선언이 가능합니다.
// - 중복 선언을 하게 되면 합쳐집니다.

interface Student {
  score?: number;
}
// type은 중복선언이 불가능 합니다.

// extend 쓸 때 중복속성이 발생하면 에러로 잡아줍니다.
// & 기호는 중복 속성이 발생하면?

// (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// let 상품 = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다. 어떻게 코드를 짜면 될까요?

interface a {
  brand: string;
  serialNumber: number;
  model: string[];
}

let 상품: a = { brand: "Samsung", serialNumber: 1360, model: ["TV", "phone"] };

// (숙제2) array 안에 object 여러개가 필요합니다.
// 쇼핑몰 장바구니를 구현하려고 하는데
// let 장바구니 = [ { product : '청소기', price : 7000 }, { product : '삼다수', price : 800 } ]
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.

interface b {
  product: string;
  price: number;
}

let 장바구니: b[] = [
  { product: "청소기", price: 7000 },
  { product: "삼다수", price: 800 },
];

// (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
// { product : '청소기', price : 7000, card : false }
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.

interface c extends b {
  card: boolean;
}

// (숙제4) object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오.

interface fun {
  plus: (a: number, b: number) => number;
  minus: (a: number, b: number) => number;
}

let aa: fun = {
  plus(a, b) {
    return a + b;
  },
  minus(a, b) {
    return a > b ? a - b : b - a;
  },
};
