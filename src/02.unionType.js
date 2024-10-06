var 회원 = 123;
var 회원2 = "123";
회원; // number
회원2; // string
var array1 = [123, "123"];
var array2 = [123, 456];
var array3 = ["123", "456"];
var obj1 = { name: 123, age: "123" };
var obj2 = { name: "123", age: "123" };
var obj3 = { name: 123, age: 123 };
// anyType
var any = 123;
// unknownType
// unknownType은 anyType보다 더 안전합니다.
var unknown = 123;
unknown = "123";
unknown = true;
// anyType은 타입을 지정하는거 자체를 완전 해제시키기때문에 오류해결하기 어려움
var 변수1 = any;
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
var user = "kim";
var age = undefined;
var married = false;
var 철수 = [user, age, married];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
