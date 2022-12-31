// Animation

var copiedfi = `<div class="text-copied">
      <span>Text Copied
      <svg width="32" height="32" viewBox="0 0 24 24">
        <g fill="none">
          <path
            d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
          <path
            fill="#fff"
            d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2Zm0 2a8 8 0 1 0 0 16a8 8 0 0 0 0-16Zm0 11a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm0-9a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V7a1 1 0 0 1 1-1Z" />
        </g>
      </svg>
      </span>
    </div>
 `;

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
  svgGenerate.classList.add("generate-addAnimation");
  resu.value = main();
  setInterval(function () {
    svgGenerate.classList.remove("generate-addAnimation");
  }, 800);
});

function copyField() {
  const copyText = document.querySelector("#result");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById("copied").innerHTML = copiedfi;

  setInterval(function () {
    document.getElementById("copied").innerHTML = "";
  }, 2500);
}
resu.value = main();
