const elements = ["anemo", "geo", "electro", "dendro", "hydro", "pyro", "cryo"];

const correct = [
  ["anemo", "anemo", "pyro", "pyro"],
  ["geo", "electro", "electro", "geo"],
  ["dendro", "hydro", "dendro", "hydro"],
  ["cryo", "cryo", "cryo", "cryo"]
];

const rows = document.getElementById("rows");
const cols = document.getElementById("cols");

const rowsOutput = document.getElementById("rows-output");
const colsOutput = document.getElementById("cols-output");

rows.addEventListener("input", () => {
  rowsOutput.textContent = rows.value;
});

cols.addEventListener("input", () => {
  colsOutput.textContent = cols.value;
});


const generate = document.getElementById("generate");
const table = document.getElementById("table");
const controls = document.getElementById("controls");

generate.addEventListener("click", () => {
  table.innerHTML = "";
  for (let i = 0; i < rows.value; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < cols.value; j++) {
      const cell = document.createElement("td");
      elements.forEach(element => {
        const option = document.createElement("option");
        option.textContent = element;
      });
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  controls.style.display = "none";
});

table.addEventListener("click", (event) => {
  const cell = event.target;
  const row = cell.parentElement.rowIndex;
  const col = cell.cellIndex;
  console.log(`Row: ${row}, Column: ${col}`);
});

table.addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD") {
    if (!cell.style.backgroundImage) {
      cell.style.backgroundImage = "url('anemo.webp')";
      cell.dataset.elementIndex = 0;
    } else {
      let currentIndex = parseInt(cell.dataset.elementIndex, 10);
      currentIndex = (currentIndex + 1) % (elements.length + 1);
      if (currentIndex === elements.length) {
        cell.style.backgroundImage = "";
        delete cell.dataset.elementIndex;
      } else {
        cell.style.backgroundImage = `url('${elements[currentIndex]}.webp')`;
        cell.dataset.elementIndex = currentIndex;
      }
    }
  }
});

table.addEventListener("click", (event) => {
  const cell = event.target;
  if (cell.tagName === "TD") {
    const row = cell.parentElement.rowIndex;
    const col = cell.cellIndex;
    if (row < correct.length && col < correct[row].length) {
      const correctElement = correct[row][col];
      const selectedElement = elements[cell.dataset.elementIndex];
      if (correctElement === selectedElement) {
        cell.classList.add("correct");
        cell.style.pointerEvents = "none";
      } else {
        cell.classList.remove("correct");
        cell.style.pointerEvents = "auto";
      }
    }
  }
});






