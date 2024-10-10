/* -------------------------------------------------------------------------- */
/*                                  tupleType                                 */
/* -------------------------------------------------------------------------- */

let 멍멍: (string | boolean)[] = ["dog", true];

// tupleType을 사용하면 조금 더 엄격하게 타입을 명시가 가능합니다.
// 이렇게 사용하게되면 배열의 첫번째는 string 두번째는 boolean입니다.
let 냥냥: [string, boolean] = ["cat", true];

// tuple안에 옵션표시가 가능합니다.
// 옵션은 항상 마지막에 사용이 가능합니다.
// 중간에 사용하게되면 배열의 순서가 깨지기 때문에
let 왈왈: [string, boolean?, number?] = ["dog", true];

// rest parameter 타입 지정시 tuple이 가능합니다.
function 함(...x: [number, string]) {
  console.log(x);
}

함(1, "2");
// array 두개를 spread 연산자로 합치는 경우 타입지정은?
let arr = [1, 2, 3];
let arr2 = [4, 5, 6];

let arr3: [...number[]] = [...arr, ...arr2];
let arr4: [number, number, ...number[]] = [1, 2, ...arr2];

const 맛있다: [string, number, boolean] = ["동서녹차", 4000, true];

// (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?
// let arr = ['동서녹차', 4000, true, false, true, true, false, true]
// 몇개인지는 모르겠지만 true와 false가 셋째 자료부터 잔뜩 들어올 수 있다고 합니다.
// tuple 타입과 spread 연산자를 써보도록 합시다.

let 맛있는자료: [string, number, ...boolean[]] = [
  "동서녹차",
  4000,
  true,
  false,
  true,
  true,
  false,
  true,
];

// (숙제3) 함수에 타입지정을 해보도록 합시다.
// function 함수(){

// }
// 1. 이 함수의 첫째 파라미터는 문자,
// 2. 둘째 파라미터는 boolean,
// 3. 셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.
// 그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?
// 오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.

type 하하펑션타입 = (a: string, b: number, rest: [string?, number?]) => void;

const 하하펑션: 하하펑션타입 = function 하하(a, b, rest) {
  console.log(a, b, rest);
};

하하펑션("안녕", 2000, ["바보", 2000]);

// (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.
// 파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.
// 문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.
// 함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.
// (동작예시)
// 함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.

function 문자숫자분류함수(...rest: (string | number)[]): [string[], number[]] {
  let 문자: string[] = [];
  let 숫자: number[] = [];

  rest.forEach((item) => {
    if (typeof item === "string") {
      문자.push(item);
    } else {
      숫자.push(item);
    }
  });

  return [문자, 숫자];
}
console.log(문자숫자분류함수("b", 5, 6, 8, "a"));
console.log(문자숫자분류함수("c", "안녕", 2, 8, "a", 8));
