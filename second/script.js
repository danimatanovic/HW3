function myFunction() {
    let numOfChar = parseInt(document.getElementById('numberOfChar').value);
    let numberOfBoxes = document.getElementById('numberOfBoxes');
    for (let i = 0; i < numOfChar; i++) {
        var square = document.createElement("input");
        square.style.width = "40px";
        square.style.height = "40px";
        square.style.margin = "0 10px"
        square.style.border = "2px solid black";
        numberOfBoxes.appendChild(square);
    }
}