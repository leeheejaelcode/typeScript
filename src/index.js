// 타입스크립트 자동 컴파일 명령어
// tsc -w
var 이름 = ["kim", "park"];
var 나이 = { age: 20 };
// let 나이: { age?: number } = { age: 20 }; ?는 옵션입니다.
var 성별 = "male"; // union type (|) string 또는 number
var 타입 = "kim";
// 함수르 만들때도 타입을 지정할 수 있습니다
// 인수도 변수이기때문에 타입 지정이 가능하며 인수 뒤에 리턴되는 값의 타입도 지정이 가능합니다.
function 함수(x) {
    return x * 2;
}
var john = [123, true];
var may = {
    name: "may",
    age: 20,
};
var gabi = {
    name: "gabi",
    age: "20",
};
// 밑에처럼 사용하면 에러
// let jay: Obj = {
//   name: "jay",
//   age: 20,
// };
// class의 타입 설정
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var 바보 = "바보";
