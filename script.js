const CONTAINER$SIZE = 700;
let nCrossN;

// const nCrossN = 16;

// let sketchLst = [];

const container = document.addEventListener("load", createGrid());

function createGrid(nCrossN = 16) {
  const container = document.querySelector("#main-container");
  const cellWidth = CONTAINER$SIZE / nCrossN;
  const cellHeight = CONTAINER$SIZE / nCrossN;

  for (let i = 0; i < nCrossN; i++) {
    let row = document.createElement("div");

    for (let j = 0; j < nCrossN; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell-style");
      cell.style.width = cellWidth + "px";
      cell.style.height = cellHeight + "px";
      // cell.innerText = "x";
      row.appendChild(cell);
    }
    row.classList.add("row-style");
    // row.style.height = `{800 / 16}px`;
    container.appendChild(row);
    // sketchLst.push(row);
  }
  // hover();
  return container;
}

// createGrid();

let sizeButton = document.querySelector("#size-button");

sizeButton.addEventListener("click", function () {
  pencil.classList.remove("shadow");
  eraser.classList.remove("shadow");
  let num = prompt("Size of grid n x n: Enter n");
  console.log(num);
  if (num === null || num === "") {
    document.querySelector("#main-container").remove();
    let container = document.createElement("div");
    container.setAttribute("id", "main-container");
    document
      .querySelector("#area")
      .insertBefore(container, document.querySelector("#right-navigation"));

    console.log("nCrossN: " + num);
    container = createGrid(nCrossN);
    return;
  }
  nCrossN = Number(num);

  document.querySelector("#main-container").remove();
  let container = document.createElement("div");
  container.setAttribute("id", "main-container");
  document
    .querySelector("#area")
    .insertBefore(container, document.querySelector("#right-navigation"));

  console.log("nCrossN: " + num);
  if (nCrossN > 64) {
    alert("Max size limit: 64x64.");
    document.querySelector("#current-size").innerHTML = "64 x 64";
    // alert("Reverting back to 16x16");
    return createGrid(64);
  }
  container = createGrid(nCrossN);
  document.querySelector("#current-size").innerHTML = nCrossN + " x " + nCrossN;
  // hover();
  // return container;
});

// createGrid(nCrossN);

function hover() {
  let cells = document.querySelectorAll("#main-container > div > div");

  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", function () {
      cell.classList.add("cell-hover");
    })
  );
}

function erase() {
  let cells = document.querySelectorAll("#main-container > div > div");

  cells.forEach((cell) =>
    cell.addEventListener("mouseenter", function () {
      cell.classList.remove("cell-hover");
    })
  );
}

var eraser = document.querySelector("#eraser");
var pencil = document.querySelector("#draw");

eraser.addEventListener("click", function () {
  // alert("Changing to Eraser");
  this.classList.add("shadow");
  pencil.classList.remove("shadow");
  erase();
});

pencil.addEventListener("click", function () {
  // alert("Drawing start");
  this.classList.add("shadow");
  eraser.classList.remove("shadow");
  hover();
});
