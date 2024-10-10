/* -------------------------------------------------------------------------- */
/*                              import export 문법                              */
/* -------------------------------------------------------------------------- */

// import 시에는 tsconfig.ts의 module 방식을 ESNext로 변경
// package.json에도 {"type": "module"}로 변경
// index.html에 스크립트의 type을 module로 변경
// js파일 확장자를 mjs로 변경

import { Cars, Bike, fnType, Dog } from "./type";

let 자동차: Cars = {
  wheel: 4,
  model: "k5",
};

let 바이크: Bike = {
  wheel: 2,
  model: "아반떼",
};

let 함수: fnType = function (a) {
  console.log(a);
};

함수({ abc: "안뇽" });

// TypeScript 타입변수 숨기기 문법 namespace
