// Animation
var htmlView = ` <div class="container">
      <h1>Generate Random Password</h1>
      <div class="content">
        <textarea name="" id="result" cols="25" rows="1"></textarea>
        <div class="bottom-copy" onclick="copyField()">
          <svg width="32" height="32" viewBox="0 0 24 24">
            <path
              fill="#000000"
              d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
          </svg>
        </div>
        <div class="bottom-generate">
          <svg
            width="32"
            height="32"
            viewBox="0 0 16 16"
            class="generate-animation">
            <path
              fill="none"
              stroke="red"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M4.75 10.75h-3m12.5-2c0 3-2.798 5.5-6.25 5.5c-3.75 0-6.25-3.5-6.25-3.5v3.5m9.5-9h3m-12.5 2c0-3 2.798-5.5 6.25-5.5c3.75 0 6.25 3.5 6.25 3.5v-3.5" />
          </svg>
        </div>
      </div>
      <div class="setting">
        <input
          class="inp-number"
          type="number"
          id="generate-length"
          placeholder="8"
          value="8"
           />
        <label class="label ml" for="generate-length"> Length </label>
        <input class="inp-character" type="checkbox" id="generate-character" />
        <label class="label ml" for="generate-character">Character</label>
        <input
          class="inp-generate-number"
          type="checkbox"
          id="generate-number" />
        <label class="label ml" for="generate-number">Number</label>
      </div>
    </div>`;

document.getElementById("root").innerHTML = htmlView;

const bottomGenerate = document.querySelector(".bottom-generate");
const svgGenerate = document.querySelector(".generate-animation");
const textNumber = "1234567890";
var textBig = "ABCDDFGHIJKLMNOPQRSTUWXZ";
const textSmall = textBig.toLowerCase();
const textCharacter = "`~!@#$%&=+?><";
const textAuto = `${textBig}${textSmall}`;
const resu = document.getElementById("result");

function main() {
  var result = "";
  const usingCharacter = document.getElementById("generate-character").checked;
  const usingNumber = document.getElementById("generate-number").checked;
  const lenthGenerate = document.getElementById("generate-length").value;
  var c = "";
  var n = "";
  for (var i = 0; i < 2; i++) {
    c += usingCharacter
      ? textCharacter.split("")[
          Math.floor(Math.random() * textCharacter.length)
        ]
      : textAuto.split("")[Math.floor(Math.random() * textAuto.length)];
  }
  for (var i = 0; i < 3; i++) {
    n += usingNumber
      ? textNumber.split("")[Math.floor(Math.random() * textNumber.length)]
      : textAuto.split("")[Math.floor(Math.random() * textAuto.length)];
  }
  for (var i = 0; i < lenthGenerate - 5; i++) {
    result += textAuto.slice("")[Math.floor(Math.random() * textAuto.length)];
  }
  var a = result + c + n;
  var b = "";

  for (var i = 0; i < a.length; i++) {
    b += a.split("")[Math.floor(Math.random(a) * a.length)];
  }
  return b;
}

bottomGenerate.addEventListener("click", function () {
  resu.value = main();
});

function copyField() {
  const copyText = document.querySelector("#result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
resu.value = main();
