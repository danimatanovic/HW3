var numberOfBoxes = document.getElementById('numberOfBoxes');
var lettersForPalindrome = "";
const warningMessage = document.getElementById("warningMessage");
const warningNumber = document.getElementById("warningNumber");
function myFunction() {
  var numOfChar = parseInt(document.getElementById('numberOfChar').value);
  if (numOfChar <= 0) {
    warningNumber.classList.add("show");
  }
  else {
    warningNumber.classList.remove("show");
    for (let i = 0; i < numOfChar; i++) {
      var square = document.createElement("input");
      square.style.width = "40px";
      square.style.height = "40px";
      square.style.margin = "0 10px"
      square.style.border = "2px solid black";
      square.style.textAlign = "center";
      square.style.position = "relative";
      square.setAttribute("maxlength", "1");
      square.id = "squar" + i;
      numberOfBoxes.appendChild(square);
      let inputElement = document.getElementById("squar" + i);
      inputElement.addEventListener("input", function () {
        if (isCharacterALetter(inputElement.value) == false) {
          warningMessage.classList.add("show");
          inputElement.value = ""
        }
        else {
          warningMessage.classList.remove("show");
          inputElement.addEventListener("keydown", function (event) {
            if (event.keyCode === 8 || event.keyCode === 46) {
              event.preventDefault();
            }
          });
          lettersForPalindrome = lettersForPalindrome + inputElement.value;
          checkPalindrome(lettersForPalindrome);
        }
      });
    }
    createX(numOfChar);
    const button = document.getElementById("addChar");
    button.classList.add("show");
  }
}

function addNumber() {
  let i = numberOfBoxes.childNodes.length - 3;
  var square = document.createElement("input");
  square.style.width = "40px";
  square.style.height = "40px";
  square.style.margin = "0 10px"
  square.style.border = "2px solid black";
  square.style.textAlign = "center";
  square.setAttribute("maxlength", "1");
  square.id = "squar" + i;
  numberOfBoxes.appendChild(square);
  let inputElement = document.getElementById("squar" + i);
  inputElement.addEventListener("input", function () {
    if (isCharacterALetter(inputElement.value) == false) {
      const warningMessage = document.getElementById("warningMessage");
      warningMessage.classList.add("show");
      inputElement.value = ""
    }
    else {
      warningMessage.classList.remove("show");
      inputElement.addEventListener("keydown", function (event) {
        if (event.keyCode === 8 || event.keyCode === 46) {
          event.preventDefault();
        }
      });
      lettersForPalindrome = lettersForPalindrome + inputElement.value;
      checkPalindrome(lettersForPalindrome);
    }
  });
  let removeX = document.getElementById('removeX');
  var buttonX = document.createElement("button");
  buttonX.innerHTML = "X";
  buttonX.style.backgroundColor = "rgb(222 0 0 / 74%)";
  buttonX.style.color = "white";
  buttonX.style.borderRadius = "50%";
  buttonX.style.fontWeight = "bold";
  buttonX.style.border = "rgb(222 0 0 / 74%)";
  buttonX.style.fontSize = "20px";
  buttonX.style.height = "35px";
  buttonX.style.width = "35px";
  buttonX.style.margin = " 0 16px";
  buttonX.style.cursor = "pointer";
  buttonX.id = "button" + i;
  removeX.appendChild(buttonX);
  buttonX.addEventListener("click", function () {
    var lastChild = removeX.lastElementChild;
    removeX.removeChild(lastChild);
    var index = i;
    removeSquare(index);
    lettersForPalindrome = lettersForPalindrome.substring(0, i) + lettersForPalindrome.substring(i + 1);
    checkPalindrome(lettersForPalindrome);
  });
}

function createX(n) {
  let removeX = document.getElementById('removeX');
  for (let j = 0; j < n; j++) {
    var buttonX = document.createElement("button");
    buttonX.innerHTML = "X";
    buttonX.style.backgroundColor = "rgb(222 0 0 / 74%)";
    buttonX.style.color = "white";
    buttonX.style.borderRadius = "50%";
    buttonX.style.fontWeight = "bold";
    buttonX.style.border = "rgb(222 0 0 / 74%)";
    buttonX.style.fontSize = "20px";
    buttonX.style.height = "35px";
    buttonX.style.width = "35px";
    buttonX.style.margin = " 0 16px";
    buttonX.style.cursor = "pointer";
    buttonX.id = "button" + j;
    removeX.appendChild(buttonX);
    buttonX.addEventListener("click", function () {
      var lastChild = removeX.lastElementChild;
      removeX.removeChild(lastChild);
      var index = j;
      removeSquare(index);
      lettersForPalindrome = lettersForPalindrome.substring(0, j) + lettersForPalindrome.substring(j + 1);
      checkPalindrome(lettersForPalindrome);
    });
  }

}
function removeSquare(m) {
  var specificChild = numberOfBoxes.childNodes[m + 3];
  numberOfBoxes.removeChild(specificChild);
  if (numberOfBoxes.childNodes.length === 3) {
    const button = document.getElementById("addChar");
    button.classList.remove("show");
  }
}
function isCharacterALetter(char) {
  return (/^[a-zA-Z\s]+$/).test(char)
}

function checkPalindrome(string) {
  let len = string.length;
  if (len === 0) {
    return document.getElementById("palindrome").innerHTML = "";
  }
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      return document.getElementById("palindrome").innerHTML = 'Unijeta rije?? nije palindrom';
    }
  }
  return document.getElementById("palindrome").innerHTML = "Unijeta rije?? je palindrom";
}

