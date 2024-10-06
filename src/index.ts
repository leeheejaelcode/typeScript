// 타입스크립트 자동 컴파일 명령어
// tsc -w

let 이름: string[] = ["kim", "park"];
let 나이: { age: number } = { age: 20 };
// let 나이: { age?: number } = { age: 20 }; ?는 옵션입니다.
let 성별: string | number = "male"; // union type (|) string 또는 number

// 타입 지정이 길어지면 변수에 담아서 사용할 수 있습니다
// type 타입명
// 타입명은 대문자로 시작하는 경우가 많음 Name , Age 이런식으로
type alias = string | number;
let 타입: alias = "kim";

// 함수르 만들때도 타입을 지정할 수 있습니다
// 인수도 변수이기때문에 타입 지정이 가능하며 인수 뒤에 리턴되는 값의 타입도 지정이 가능합니다.
function 함수(x: number): number {
  return x * 2;
}

// array에서 사용가능한 tuple타입
type Member = [number, boolean];

let john: Member = [123, true];

// object타입에 사용 가능
type Member2 = {
  name: string;
  age: number;
};

let may: Member2 = {
  name: "may",
  age: 20,
};

// object 글자로 된 모든 object 속성의 타입은 : string
// 이렇게 작성하게 되면 모든 값이 string 이여야합니다.
type Obj = {
  [key: string]: string;
};

let gabi: Obj = {
  name: "gabi",
  age: "20",
};

// 밑에처럼 사용하면 에러
// let jay: Obj = {
//   name: "jay",
//   age: 20,
// };

// class의 타입 설정
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
