const CONTAINER$SIZE = 700;
let nCrossN;

// const nCrossN = 16;

// let sketchLst = [];

const container = createGrid();
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

  return container;
}

// createGrid();

let sizeButton = document.querySelector("#size-button");

sizeButton.addEventListener("click", function () {
  document.querySelector("#main-container").remove();
  let container = document.createElement("div");
  container.setAttribute("id", "main-container");
  document
    .querySelector("#area")
    .insertBefore(container, document.querySelector("#right-navigation"));
  let num = prompt("Size of grid n x n: Enter n");
  nCrossN = Number(num);

  if (nCrossN > 64) {
    alert("Max limit of grid is 64x64.");
    // alert("Reverting back to 16x16");
    createGrid(64);
    return;
  }

  console.log("nCrossN: " + num);
  container = createGrid(nCrossN);
  console.log(container);
});

// createGrid(nCrossN);
