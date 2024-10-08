// narrowing 방식
// 위에 x처럼 애매한 유니온 타입이면 typeof를 사용하여서 타입을 확정후에 코드를 실행시킵니다.
function 내함수(x) {
    if (typeof x === "string") {
        return x + "1";
    }
    else {
        return x + 1;
    }
}
function narrowingArray(x) {
    let arr = [];
    if (typeof x === "number") {
        return (arr[0] = x);
    }
    else {
        return x + 1;
    }
}
// narrowing 주의 사항
// 1. if문을 사용했으면 끝까지 써야 안전합니다 else, else if 안쓰면 에러로 잡을 수 도 있습니다.
// narrowing으로 판절해주는 문법들 현재 변수의 타입이 뭔지 특정지을 수 있기만 하면 됩니다.
// 1. typeof 변수
// 2. 속성명 in 오브젝트 자료
// 3. 인스턴스 instanceof 부모
// assertion 문법 (타입 덮어쓰기)
// 변수 as 타입
function assertionArray(x) {
    let arr = [];
    arr[0] = x;
}
// assertion 문법의 용도
/* ----------------------- 1. narrowing 할 때 사용합니다. ----------------------- */
// let name : string = "kim";
// name as number // 이렇게 타입을 변경하는 문법이 아닙니다.
/* ------------------- 2. 무슨 타입이 들어올지 100% 확실할 때 사용합니다. ------------------ */
//(숙제1) 숫자여러개를 array 자료에 저장해놨는데
// 가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.
// 이걸 클리닝해주는 함수가 필요합니다.
// 클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
// [1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.
// 모르는 부분은 구글검색해도 봐드림
function numberArray(array) {
    let result = array.map((x) => {
        return typeof x === "string" ? Number(x) : x;
    });
    return result;
}
console.log(numberArray(["1", 2, "3"]));
console.log(numberArray(["1", "66"]));
//(숙제2)
// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }
// 지금 여러 변수에 선생님이 가르치고 있는 과목이 저장이 되어있습니다.
// 과목 1개만 가르치는 쌤들은 문자 하나로 과목이 저장이 되어있고
// 과목 2개 이상 가르치는 쌤들은 array 자료로 과목들이 저장되어있습니다.
// '철수쌤' 같은 object 자료를 파라미터로 집어넣으면
// 그 선생님이 가르치고 있는 과목중 맨 뒤의 1개를 return 해주는 함수를 만들어봅시다.
// 그리고 타입지정도 엄격하게 해보도록 합시다.
function lastSubject(subject) {
    if (typeof subject.subject === "string") {
        return subject.subject;
    }
    else {
        return subject.subject[subject.subject.length - 1];
    }
}
console.log(lastSubject({ subject: "math" })); // math
console.log(lastSubject({ subject: ["science", "english"] })); // english
console.log(lastSubject({ subject: ["science", "english", "art"] })); // art
