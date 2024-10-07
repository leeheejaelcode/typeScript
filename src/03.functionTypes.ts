let y; // 변수만 만들면 any타입이 자동할당됩니다.

function fn(x: number): number {
  return x * 2;
}

// 파라미터도 변수이기때문에 파라미터 자리에도 타입이 지정이 가능합니다.
// 함수의 return되는 값의 타입도 지정이 가능합니다.

fn(3); // number 타입이기 때문에 에러가 안나지만
// fn("3") // string 타입이기 때문에 에러 발생

// 함수에서만 사용이 가능한 특별한 void 타입
// 함수에서 return 할게 없거나 실수로 무언갈 return하는걸 사전에 막고싶으면 void 사용하기
function noReturn(): void {
  1 + 1;
}

// 자바스크립트 함수와 타입스크립트 함수의 다른점
// - 타입이 지정된 파라미터는 필수입니다.
// - 파라미터가 옵션일 경우에는 파라미터변수?:타입

// 변수?: number 는
// 변수 : number | undefined 와 같습니다.
// 함수도 유니온 타입이면 에러가 발생합니다.
function fn2(x: number | string): void {
  // console.log(x + 3);
}
// 문제

// (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// 파라미터와 return 타입지정도 잘 해봅시다.

function helloName(name?: string): void {
  if (name) {
    console.log(`안녕하세요 ${name} 홍길동`);
  } else {
    console.log("이름이 없습니다");
  }
}

// (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// 예를 들어 '245' 이런 문자를 입력하면 3이 return 되어야합니다.
// 숫자도 마찬가지로 9567 이런 숫자를 입력하면 4가 return 되어야합니다.
// 숫자 또는 문자 이외의 자료가 들어오면 안됩니다.

function numberOrString(x: number | string): number {
  return x.toString().length;
}

// (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.

// 1. 함수의 파라미터로 월소득(만원단위), 집보유여부(true/false), 매력점수 ('상' or '중' or '하') 를 입력할 수 있어야합니다.
// 2. 월소득은 만원 당 1점, 집보유시 500점 & 미보유시 0점, 매력점수는 '상'일 때만 100점으로 계산합니다.
// 3. 총 점수가 600점 이상일 경우 "결혼가능"을 return 해줘야합니다. 그 외엔 아무것도 return하지 않습니다.

// (예시)
// 결혼가능하냐(700, false, '중') 이렇게 사용할 경우 "결혼가능"을 return 해줍니다.
// 결혼가능하냐(100, false, '상') 이렇게 사용할 경우 아무것도 return되지 않습니다.

function 결혼가능확률(
  월소득: number,
  집보유여부: boolean,
  매력점수: string
): void | string {
  let 월소득점수: number = 월소득;
  let 집보유점수: number = 집보유여부 ? 500 : 0;
  let 매력: number = 매력점수 === "상" ? 100 : 0;

  if (월소득점수 + 집보유점수 + 매력 >= 600) {
    return "결혼가능";
  } else {
    return;
  }
}
