/* -------------------------------------------------------------------------- */
/*                              protected&static                              */
/* -------------------------------------------------------------------------- */

/* -------------------------------- protected ------------------------------- */
// private,protected 붙이면 class 안에서만 사용이 가능합니다.
// 하지만 private는 현재 class 안에서만 사용이 가능하고
// protected는 현재 class안에서와 extends된 class안에서 사용이 가능합니다.
class X {
  protected x = 10;
}

class Num extends X {
  doThis() {
    this.x = 20;
  }
}

// protected는 class를 여러개를 만들고 싶은데 class끼리 공유를 할수있는 속성을 만들고 싶을때 사용합니다.
// private : extends된 class는 사용불가능, 자식들 사용불가능
// protected : extends된 class는 사용가능, 자식들 사용불가능

/* -------------------------------- static ------------------------------- */
// class User {
//   static x = 10;
//   y = 20;
// }

// let 자식 = new User();
// console.log(자식);
// console.log(User.x);

// static 키워드를 붙이면 부모 class에 직접 부여가 되고 자식에게 물려주지 않습니다.
// private / protected / public + static 키워드 사용이 가능합니다.

class User {
  static skill = "js";
  intro = `${User.skill} 전문가입니다.`;
  // intro = `${this.skill} 전문가입니다.`;
  // static키워드를 사용하게되면 class만 사용이 가능 하기때문에 this가 아닌 클래스네임으로 사용해야 합니다.
}

let 동호 = new User();
console.log(동호.intro);

User.skill = "ts";

let 지훈 = new User();
console.log(지훈.intro);

class add {
  private static x = 10;
  public static y = 20;

  static addOne(x: number) {
    add.x += x;
  }

  static printX() {
    console.log(add.x);
  }
}

add.addOne(3);
add.addOne(4);
add.printX();

class Square {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    const container = document.getElementById("container");

    const box = document.createElement("div");
    box.style.width = `${this.width}px`;
    box.style.height = `${this.height}px`;
    box.style.backgroundColor = this.color;
    box.style.position = "absolute";

    // 400x400 공간 안에서 랜덤한 위치 계산
    const randomX = Math.floor(Math.random() * (400 - 30)); // 0 ~ 370px
    const randomY = Math.floor(Math.random() * (400 - 30)); // 0 ~ 370px

    // 박스의 위치 설정
    box.style.left = `${randomX}px`;
    box.style.top = `${randomY}px`;

    // container에 박스 추가
    if (container) container.appendChild(box);
  }
}

let 빨간네모 = new Square(30, 30, "red");
let 초록네모 = new Square(15, 15, "green");
let 파란네모 = new Square(25, 25, "blue");
빨간네모.draw();
빨간네모.draw();
빨간네모.draw();
초록네모.draw();
초록네모.draw();
초록네모.draw();
파란네모.draw();
파란네모.draw();
파란네모.draw();
