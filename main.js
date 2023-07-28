function moveElevator() {
  var destinationFloor = parseInt(prompt("Введите этаж от 1 до 7:", "1"));

  if (isNaN(destinationFloor) || destinationFloor < 1 || destinationFloor > 7) {
    alert("Пожалуйста, введите число от 1 до 7.");
    return;
  }

  var elevator = document.getElementById("moving-block");
  var floorHeight = -100;

  elevator.style.top = floorHeight * (destinationFloor - 1) + "px";
}
function moveBlockUp() {
  var block = document.getElementById("moving-block");
  var currentTop = parseInt(block.style.top) || 0;
  block.style.top = currentTop - 100 + "px";
}
function moveBlockDown() {
  var block = document.getElementById("moving-block");
  var currentTop = parseInt(block.style.top) || 0;
  block.style.top = currentTop + 100 + "px";
}
const block = document.getElementById("moving-block");
const step = 100;
