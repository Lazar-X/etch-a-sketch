window.onload = () => {
    console.log("connected");

    let btnSet = document.querySelector("#set");
    let btnReset = document.querySelector("#reset");

    makeGrid(16);

    btnSet.addEventListener("click", () => {
        let inputNumberValue = document.querySelector("#inputNumber").value;
        
        if(inputNumberValue != 0 && inputNumberValue >= 16 && inputNumberValue <= 100) {
            makeGrid(inputNumberValue);
        }
    });

    btnReset.addEventListener("click", () => {
        makeGrid(16);
    });

}

let container = document.querySelector("#container");
let blocks = document.querySelectorAll(".gridBlock");

function makeGrid(number) {
    let html = "";
    for(let i = 0; i < number; i++) {
        html += `<div class="gridRow">`;
        for(let j = 0; j < number; j++) {
            html += `<div class="gridBlock"></div>`;
        }
        html += `</div>`;
    }
    container.innerHTML = html;
    changeColor();
}

function makeBlock() {
    let html = `<div class="gridBlock"></div>`;
    return html;
}

function changeColor() {
    let blocks = document.querySelectorAll(".gridBlock");
    blocks.forEach(block => {
        block.addEventListener("mouseover", () => {
            block.setAttribute("style", "background-color: red;");
        });
    });
}

// let html = `<div id="container" class="containerClass"></div>`;

// html += `<div class="gridClass"></div>`;