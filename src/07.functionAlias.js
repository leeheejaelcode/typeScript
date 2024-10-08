/* -------------------------------------------------------------------------- */
/*                                functionAlias                               */
/* -------------------------------------------------------------------------- */
// 2. 함수표현식에서만 type alias 사용이 가능합니다.
let 함수 = function (a) {
    return 10;
};
let 회원정보 = {
    name: "Kim",
    plusOne(x) {
        return x + 1;
    },
    changeName: () => {
        console.log("changeName");
    },
};
const cutZero = function (x) {
    return x[0] === "0" ? x.slice(1) : x;
};
const removeDash = function (x) {
    return x.replaceAll("-", "");
};
const x = function (x, fn1, fn2) {
    const result1 = fn1(x);
    return fn2(result1);
};
console.log(x("010-1111-2222", cutZero, removeDash));
