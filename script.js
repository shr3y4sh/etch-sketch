const container = document.querySelector("#main-container");

createGrid();

// let sketchLst = [];

function createGrid() {
  for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");

    for (let j = 0; j < 16; j++) {
      let cell = document.createElement("div");
      cell.classList.add("cell-style");
      row.appendChild(cell);
    }
    row.classList.add("row-style");
    container.appendChild(row);
    // sketchLst.push(row);
  }
}
