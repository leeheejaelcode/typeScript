// keyof

// keyof를 사용하게되면
// key값으로 리터럴 타입을 지정할 수 있습니다.
let objs = { name: "kim", age: 30 };

Object.keys(objs);

interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // 'age' | 'name'
let w: PersonKeys = "name";

// 타입을 만들어놨는데 다른 타입으로 변환하려면?

type Carss = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

// 타입 맵핑

type TypeChanger<T> = {
  [key in keyof T]: string;
};

type 새로운타입 = TypeChanger<Carss>;

type Bus = {
  color: string;
  model: boolean;
  price: number;
};

type gg<T> = {
  [key in keyof T]: string | number;
};

type Bus2 = gg<Bus>;

type ww<MyType, T> = {
  [key in keyof MyType]: T;
};

type Bus3 = ww<Bus, string>;
