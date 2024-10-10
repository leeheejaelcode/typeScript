/* -------------------------------------------------------------------------- */
/*                                 public키워드 , private                                */
/* -------------------------------------------------------------------------- */

// public 붙으면 모든 자식들이 이용 가능
// private 붙으면 class 안에서만 수정,이용가능합니다
class User {
  public name: string;
  private familyName: string = "김";

  constructor(name: string) {
    this.name = this.familyName + name;
  }

  change() {
    this.familyName = "홍";
    this.name = this.familyName + this.name.slice(1); // '홍'으로 성을 바꾸고 이름을 유지
  }
}

let user1 = new User("민수");
user1.change();
console.log(user1.name);

class P {
  // (public name: string) 이 자리에 들어온 파라미터는 자식의 name 속성에 기입해주세요
  constructor(public name: string, public age: number) {
    this.name = name;
    this.age = age;
  }
}

let 자식 = new P("kim", 20);
console.log(자식);
