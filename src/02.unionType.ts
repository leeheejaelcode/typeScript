// 유니온 타입 (unionType)
// 타입 2개이상 합친 새로운 타입 만들기
type unionType = string | number;

let 회원: unionType = 123;
let 회원2: unionType = "123";

회원; // number
회원2; // string

// 숫자 or 문자가 가능한 array 타입 지정은?

type arrayUnionType = (string | number)[];
let array1: arrayUnionType = [123, "123"];
let array2: arrayUnionType = [123, 456];
let array3: arrayUnionType = ["123", "456"];

type objUnionType = {
  name: string | number;
  age: string | number;
};

let obj1: objUnionType = { name: 123, age: "123" };
let obj2: objUnionType = { name: "123", age: "123" };
let obj3: objUnionType = { name: 123, age: 123 };

// anyType
let any: any = 123;

// unknownType
// unknownType은 anyType보다 더 안전합니다.
let unknown: unknown = 123;
unknown = "123";
unknown = true;

// anyType은 타입을 지정하는거 자체를 완전 해제시키기때문에 오류해결하기 어려움
let 변수1: number = any;
// let 변수2: string = unknown; // 에러 발생

// 타입스크립트는 간단한 연산도 타입을 엄격하게 지켜야합니다.
// 간단한 수학 연산도 타입이 맞아야함
// 타입이 맞는데 왜 +1이 안되는가?

// 타입스크립트에서 연산은 무조건 number에서만 가능하기 때문에 unknown타입에서는 되지않습니다.
// 타입만 지정해둔 상태에서는 연산이 되지않습니다.

// let 연산: string | number;
// 연산 + 1; // 에러

// let 연산2: unknown = 1;
// 연산2 - 1; // 에러

let user: string = "kim";
let age: undefined | number = undefined;
let married: boolean = false;
let 철수: (string | undefined | number | boolean)[] = [user, age, married];

let 학교: {
  score: (number | boolean)[];
  teacher: string;
  friend: string | string[];
} = {
  score: [100, 97, 84],
  teacher: "Phil",
  friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
