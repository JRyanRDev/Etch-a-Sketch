const container = document.getElementById("container");
const rMode = document.getElementById("iRainbow");
let size = 0;
let amount = 0;

document.getElementById("subIpt").addEventListener("click", () => {
    getIpt();
    createGrid();
})

function getIpt() {
    size = document.getElementById("iSz").value;
    console.log(rainbow());
}

function rainbow() {
    let rN = Math.random() * 0xFFFFFF;
    let rColor = Math.floor(rN).toString(16).padStart(6, 0).toUpperCase();
    return `#${rColor}`;
}

function createGrid() {
    
    console.log(size)
    const sqr = container.querySelectorAll("div");
    sqr.forEach((div) => {
        div.remove();
    })
    for (let c = 0; c < size * size; c++) {
        const square = document.createElement("div");
        square.setAttribute("class", "gridDiv");
        container.append(square);
        square.addEventListener("mouseover", () => {
            if (document.getElementById("iRainbow").checked) {
                square.style.background = rainbow();
            }
            else {
                square.style.background = "black";
            }
        })
        container.insertAdjacentElement("beforeend", square);
    }
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

