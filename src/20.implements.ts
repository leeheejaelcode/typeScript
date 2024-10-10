/* -------------------------------------------------------------------------- */
/*                                 implements 키워드                                */
/* -------------------------------------------------------------------------- */

// class 이름 우측에 implements를 쓰고 interface 이름을 쓰면
// "이 class가 이 interface에 있는 속성을 다 들고있냐"
// 라고 확인이 가능합니다.
// 그래서 다 갖고 있으면 별말 안해주고
// 혹여나 빠진 속성이 있으면 에러로 알려줍니다.

interface CarType {
  model: string;
  price: number;
}

class Cars implements CarType {
  model: string;
  price: number = 1000;
  constructor(a: string) {
    this.model = a;
  }
}
let 붕붕이 = new Cars("morning");

// implements는 타입지정문법이 아닙니다
// implements라는건 interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻입니다.
// class에다가 필드와 타입을 할당하고 변형시키고 그런 역할은 아닙니다.

// interface CarType {
//   model : string,
//   tax : (price :number) => number;
// }
// class Cars implements CarType {
//   model;   ///any 타입됨
//   tax (a){   ///a 파라미터는 any 타입됨
//     return a * 0.1
//   }
// }
