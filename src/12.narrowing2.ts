/* -------------------------------------------------------------------------- */
/*                               typeNarrowing2                               */
/* -------------------------------------------------------------------------- */

// 1. && 연산자로 null & undefined 타입체크하기
function 함슈(a: string | undefined) {
  if (a && typeof a === "string") {
    // a가 undefined 이면 undefined
  }
}

// 2. in키워드로 object narrowing 가능
// 속성명 in 오브젝트자료

type Fish = { swim: string };
type Bird = { fly: string; walk: boolean };

function swimOrFly(animal: Fish | Bird) {
  if ("swim" in animal) {
    console.log("fish세요");
  } else {
    console.log("bird세요");
  }
}

swimOrFly({ swim: "헤엄치기" });
swimOrFly({ fly: "날기", walk: true });

// 3. instanceof 연산자 object narrowing
// 오브젝트 instanceof 부모class

let 날짜 = new Date();

if (날짜 instanceof Date) {
  console.log("instanceof");
}

type Car2 = {
  wheel: "4개";
  color: string;
};

type Bike = {
  wheel: "2개";
  color: string;
};

// object 타입이 둘다 비슷하게 생겼는데 narrowing 어떻게함?
// 속성명 in 오브젝트 자료(불가능)
// 오브젝트 instanceof 부모class(불가능)

// 4.object 타입마다 literal Type 만들어두면 narrowing 편리해짐
function 함수수(x: Car2 | Bike) {
  if (x.wheel === "4개") {
    console.log("x는 car타입이에여");
  }
}

type Cars = {
  wheel: string;
  color: string;
};

function 함슈우(x: Cars): void {
  if (x.wheel === "4개") {
    console.log("자동차");
  } else {
    console.log("바이크");
  }
}

함슈우({ wheel: "4개", color: "red" });
함슈우({ wheel: "2개", color: "red" });

class c {
  wheel: string;
  color: string;
  constructor(wheel: string, color: string) {
    this.wheel = wheel;
    this.color = color;
  }
}

const c1 = new c("4개", "red");
const c2 = new c("2개", "red");

if (c1 instanceof c) {
  console.log("참이여유");
}
