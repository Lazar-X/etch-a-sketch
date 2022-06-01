window.onload = () => {
    console.log("connected");

    let btnSet = document.querySelector("#set");
    
    makeGrid();
    changeColor();
}

let container = document.querySelector("#container");

function makeGrid() {
    let html = "";
    for(let i = 0; i < 16; i++) {
        html += `<div class="gridRow">`;
        for(let j = 0; j < 16; j++) {
            html += `<div class="gridBlock"></div>`;
        }
        html += `</div>`;
    }
    container.innerHTML = html;
}

function changeColor() {
    let blocks = document.querySelectorAll(".gridBlock");
    blocks.forEach(block => {
        block.addEventListener("click", () => {
            block.setAttribute("style", "background-color: red;");
        });
    });
}

// let html = `<div id="container" class="containerClass"></div>`;

// html += `<div class="gridClass"></div>`;