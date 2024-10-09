// rest파라미터 Type
function fn(...rest: number[]) {
  console.log(rest);
}

fn(1, 2, 3, 4, 5);

// destructuring type
let [변수, 변수2] = ["hello", 200];
console.log(변수);
console.log(변수2);

let 오브젝트 = { name: "kim", age: 20 };

type fn2Type = ({ name, age }: { name: string; age: number }) => void;

interface fn2Type2 {
  ({ name, age }: { name: string; age: number }): void;
}

const fn3: fn2Type = function ({ name, age }) {
  console.log(name, age);
};

fn3(오브젝트);

// (숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다.
// 최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다.
// (조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
// (조건2) Math.max() 사용금지 반복문이나 쓰셈

function maxNum(...rest: number[]): number {
  let max = 0;
  for (let i = 0; i < rest.length; i++) {
    rest[i] > max ? (max = rest[i]) : max;
  }
  return max;
}

console.log(maxNum(6, 3, 7, 2));
console.log(maxNum(6, 3, 7, 9));
console.log(maxNum(6, 144, 7, 2));

interface fn2Type2 {
  ({ name, age }: { name: string; age: number }): void;
}

// (숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( { user : 'kim', comment : [3,5,4], admin : false } )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.

interface aaType {
  ({
    user,
    comment,
    admin,
  }: {
    user: string;
    comment: number[];
    admin: boolean;
  }): void;
}

const aa: aaType = function ({ user, comment, admin }) {
  console.log(user, comment, admin);
};

aa({ user: "kim", comment: [3, 5, 4], admin: false });

// (숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다.
// 함수( [40, 'wine', false] )
// 어떻게 코드를 짜야할까요?
// (조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
// (조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.

interface bbType {
  ([a, b, c]: [number, string, boolean]): void;
}

type bbType2 = (number | string | boolean)[];

const bb: bbType = function ([a, b, c]) {
  console.log(a, b, c);
};
bb([1, "hello", true]);
