/* -------------------------------------------------------------------------- */
/*                                  neverType                                 */
/* -------------------------------------------------------------------------- */

// function return 값에 붙일 수 있는 never type
// 조건 1. return 값이 없어야함
// 조건 2. endPoint가 없어야함

// never 타입이 등장하는 경우
// 1.
function 함슈(parameter: string) {
  if (typeof parameter === "string") {
    console.log(parameter);
  } else {
    console.log(parameter); // 이런 경우는 있을 수 없다.
  }
}

// 2. 어떤 함수표현식은 return 타입이 자동으로 never 입니다.
let 함수루 = function () {
  throw new Error("error");
};

함슈("안녕");
