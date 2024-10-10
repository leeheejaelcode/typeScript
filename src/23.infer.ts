// type if문은 삼항연산자로 사용합니다
// 조건식은 extends로 사용합니다.
type color<T> = T extends string ? T : unknown; // t라는 파라미터가 string인지 아닌지
let a: color<string>;

// 파라미터로 string을 집어넣으면 string 남겨주시고
// 그게아니면 unknown 남겨주세요

type FirstItem<T> = T extends any[] ? T[0] : any;

let age1: FirstItem<string[]>;
let age2: FirstItem<number>;

/* -------------------------------------------------------------------------- */
/*                                  infer 키워드                                 */
/* -------------------------------------------------------------------------- */

// 조건문에서 쓸 수 있는 infer 키워드 타입을 왼쪽에서 추출해줍니다
// 굳이 타입을 왜 뽑나요?
type 타입추출<T> = T extends (infer R)[] ? R : unknown;
type 함수타입추출<T> = T extends () => infer R ? R : unknown;

type aa = 타입추출<string[]>; // aa의 타입은 string
type bb = 함수타입추출<() => void>; // bb의 타입은 void

type ss = ReturnType<() => string>; // string

// (숙제1) 타입 파라미터로
// 1. array 타입을 <> 안에 입력하면
// 2. array 타입의 0번째 타입이 string이면 string 타입을 그대로 남겨주고
// 3. array 타입의 0번째 타입이 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?

type arrT<T> = T extends [string, ...any] ? T[0] : unknown;
let wtw: arrT<[string, number]>;
let rwwr: arrT<[boolean, number]>;

// (숙제2) 함수 타입을 입력하면 함수 파라미터 부분의 타입을 뽑아주는 기계를 만들어보십시오.
// 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
// 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음
// 타입뽑기<> 에다가 () => {} 타입을 넣었는데
// 소괄호 파라미터 타입이 number인 경우 number를 그 자리에 뱉어줘야합니다.
// type 타입뽑기<> 라는 타입을 어떻게 만들어야할까요?

type 타입뽑기<T> = T extends (x: infer R) => any ? R : unknown;

type ddgf = 타입뽑기<(x: number) => void>; //이러면 number가 이 자리에 남음
type ddgrt = 타입뽑기<(x: string) => void>; //이러면 string이 이 자리에 남음
