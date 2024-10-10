/* -------------------------------------------------------------------------- */
/*                           object index signature                           */
/* -------------------------------------------------------------------------- */

// index signature와 중복되는 속성은 중복이 안되게합니다.
interface StringOnly {
  [key: string]: string | number; // 모든 string 타입 속성
}

let users: StringOnly = {
  name: "kim",
  age: 30,
  location: "seoul",
};

// 속성이름이 숫자인 경우에도 사용 가능합니다.
// 어차피 key에 들어가는 값들은 문자화가 되기때문에
// number 또는 string을 해도 오류가 없습니다
interface StringOnly {
  [key: number]: string | number; // 모든 string 타입 속성
}

let users2: StringOnly = {
  0: "kim",
  1: 30,
  2: "seoul",
};

// recursive

interface MyType {
  "font-size": MyType | number;
}

let css: MyType = {
  "font-size": {
    "font-size": {
      "font-size": 14,
    },
  },
};

interface objsType {
  [key: string]: string | number;
}

let objs: objsType = {
  model: "k5",
  brand: "kia",
  price: 6000,
  year: 2030,
  date: "6월",
  percent: "5%",
  dealer: "김차장",
};

interface obaType {
  "font-size": number;
  [key: string]: number | obaType;
}

let oba: obaType = {
  "font-size": 10,
  secondary: {
    "font-size": 12,
    third: {
      "font-size": 14,
    },
  },
};
