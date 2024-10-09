/* -------------------------------------------------------------------------- */
/*                                typeScriptDom                               */
/* -------------------------------------------------------------------------- */

// 타입을 narrowing 하기
let 제목 = document.querySelector("#title");

// narrowing 하는 방법 5가지
// 1.
if (제목) {
  제목.innerHTML = "TypeScript";
}
// 2. instanceof 연산자
if (제목 instanceof Element) {
  제목.innerHTML = "TypeScript";
}
// 3. as 키워드 사용하기
let 타이틀 = document.querySelector("#title") as Element;
타이틀.innerHTML = "TypeScript";
// 4. 오브젝트에 붙이는?.
if (타이틀?.innerHTML != undefined) {
  타이틀.innerHTML = "반가워요";
}
// 5. 아니면 귀찮은 strict 모드 끄든가..

// 태그의 타입이 HTMLAnchorElement인 경우
let 링크 = document.querySelector(".link");
if (링크 instanceof HTMLAnchorElement) {
  링크.href = "https://www.daum.net";
}

// HTMLHeadingElement
// HTMLButtonElement

// 타입스크립트에서 eventListener 부착하는 법

let 버튼 = document.querySelector("button");
버튼?.addEventListener("click", () => {
  console.log("버튼");
});

let img = document.querySelector("#image");
let imgButton = document.querySelector("#imgChangebutton");
imgButton?.addEventListener("click", () => {
  if (img instanceof HTMLImageElement) {
    img.src = "../../web/img/abo.png";
  }
});

let links = document.querySelectorAll(".link");

links.forEach((link) => {
  if (link instanceof HTMLAnchorElement) {
    link.href = "https://www.daum.net";
    link.innerHTML = "다음";
  }
});

for (let i = 0; i < links.length; i++) {
  if (i === 1) {
    (links[i] as HTMLAnchorElement).innerHTML = "네이버";
    (links[i] as HTMLAnchorElement).href = "https://www.naver.com";
  }
}
