namespace 네임스페이스 {
  export type Name = string | number;
}

let 변수: 네임스페이스.Name = "kim";

export type Cars = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

export type fnType = (a?: object) => void;

export type Dog = string | { name: string };

namespace GoodDog {
  export type Dog = string;
}
namespace BadDog {
  export interface Dog {
    name: string;
  }
}

let dog1: GoodDog.Dog = "bark";
let dog2: BadDog.Dog = { name: "paw" };
