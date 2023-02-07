function myFunction() {
  var numOfChar = parseInt(document.getElementById('numberOfChar').value);
  let numberOfBoxes = document.getElementById('numberOfBoxes');
  for (let i = 0; i < numOfChar; i++) {
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
      if (inputElement.value.length > 1) {
        inputElement.value = inputElement.value.slice(0, 1);
      }
    });
  }
  const button = document.getElementById("add");
  button.classList.add("show");
}
function addNumber() {
  let numberOfBoxes = document.getElementById('numberOfBoxes');
  let i = numberOfBoxes.childNodes.length - 2;
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
    if (inputElement.value.length > 1) {
      inputElement.value = inputElement.value.slice(0, 1);
    }
  });
}

