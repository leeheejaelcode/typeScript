let myName: string = "lee";
let myAge: number = 30;
let isMarried: boolean = true;

// primitiveType에는 string, number, undefined, null, boolean, symbol,bigint 등이 있습니다.

let members: string[] = ["kim", "park", "lee"];
let member: { name: string; age: number } = { name: "kim", age: 20 };

type MemberObj = { name: string; age: number };
let member2: MemberObj = { name: "lee", age: 30 };

// 타입스크립트는 타입지정 문법 생략가능 합니다.

type favoriteSong = {
  name: string;
  singer: string;
};

let 내이름: string = "lee";
let 내나이: number = 30;
let 내주소: string = "서울";

const myFavoriteSong: favoriteSong = {
  name: "좋은 날",
  singer: "아이유",
};

let project: {
  member: string[];
  days: number;
  started: boolean;
} = {
  member: ["kim", "park"],
  days: 30,
  started: true,
};
