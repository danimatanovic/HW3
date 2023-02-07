var numberOfBoxes = document.getElementById('numberOfBoxes');
var lettersForPalindrome="";
function myFunction() {
  const numOfChar = parseInt(document.getElementById('numberOfChar').value);
  for (let i = 0; i < numOfChar; i++) {
    var square = document.createElement("input");
    square.style.width = "40px";
    square.style.height = "40px";
    square.style.margin = "0 10px"
    square.style.border = "2px solid black";
    square.style.textAlign = "center";
    square.style.position = "relative";
    square.id = "squar" + i;
    numberOfBoxes.appendChild(square);
    let inputElement = document.getElementById("squar" + i);
    inputElement.addEventListener("input", function () {
      if (isCharacterALetter(inputElement.value) == false) {
        inputElement.value = "";
      }
      else {
        if (inputElement.value.length > 1) {
          inputElement.value = inputElement.value.slice(0, 1);
        }
        lettersForPalindrome=lettersForPalindrome+inputElement.value;
        checkPalindrome(lettersForPalindrome);
      }
    });
  }
  createX(numOfChar);
  const button = document.getElementById("addChar");
  button.classList.add("show");

}
function addNumber() {
  let i = numberOfBoxes.childNodes.length - 3;
  var square = document.createElement("input");
  square.style.width = "40px";
  square.style.height = "40px";
  square.style.margin = "0 10px"
  square.style.border = "2px solid black";
  square.style.textAlign = "center";
  square.id = "squar" + i;
  numberOfBoxes.appendChild(square);
  let inputElement = document.getElementById("squar" + i);
  inputElement.addEventListener("input", function () {
    if (isCharacterALetter(inputElement.value) == false) {
      inputElement.value = "";
    }
    else {
      if (inputElement.value.length > 1) {
        inputElement.value = inputElement.value.slice(0, 1);
      }
      lettersForPalindrome=lettersForPalindrome+inputElement.value;
      checkPalindrome(lettersForPalindrome);
    }
  });
  let removeX = document.getElementById('removeX');
  var buttonX = document.createElement("button");
  buttonX.innerHTML = "X";
  buttonX.style.backgroundColor = "red";
  buttonX.style.color = "white";
  buttonX.style.borderRadius = "50%";
  buttonX.style.fontWeight = "bold";
  buttonX.style.border = "red";
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
    lettersForPalindrome=lettersForPalindrome.substring(0,i) + lettersForPalindrome.substring(i+1); 
    checkPalindrome(lettersForPalindrome);
  });
}

function createX(n) {
  let removeX = document.getElementById('removeX');
  for (let j = 0; j < n; j++) {
    var buttonX = document.createElement("button");
    buttonX.innerHTML = "X";
    buttonX.style.backgroundColor = "red";
    buttonX.style.color = "white";
    buttonX.style.borderRadius = "50%";
    buttonX.style.fontWeight = "bold";
    buttonX.style.border = "red";
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
      lettersForPalindrome=lettersForPalindrome.substring(0,j) + lettersForPalindrome.substring(j+1); 
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
  for (let i = 0; i < len / 2; i++) {
      if (string[i] !== string[len - 1 - i]) {
       return document.getElementById("palindrome").innerHTML='It is not a palindrome';
      }
  }
 return document.getElementById("palindrome").innerHTML ="IT IS A PALINDROME";
}