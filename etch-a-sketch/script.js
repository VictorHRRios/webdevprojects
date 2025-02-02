const container = document.querySelector(".container");
const input_button = document.querySelector(".input-button");
const erase_button = document.querySelector(".erase-button");
let grid_size = 16;
let square_height = container.clientHeight / grid_size;
let square_width = container.clientWidth / grid_size;

let grid = createGrid(grid_size);

input_button.addEventListener("click", () =>{
    grid_size = prompt("Input grid size(max size=100):");
    if (grid_size > 100) {
        grid_size = 100;
    }
    square_height = container.clientHeight / grid_size;
    square_width = container.clientWidth / grid_size;
    console.log(grid_size);
    grid = createGrid(grid_size);
});


function createGrid(grid_size) {
    for (let i = 0; i < grid_size; i++) {
        for (let j = 0; j < grid_size; j++) {
            const element = document.createElement("div");
            element.style.width = `${square_height}px`;
            element.style.height =`${square_width}px`;
            element.style.backgroundColor = "white";
            element.addEventListener("mouseover", () => {
                element.style.backgroundColor = "red";
            });
            erase_button.addEventListener("click", () => {
                element.style.backgroundColor = "white";
            });
            input_button.addEventListener("click", () =>{
                element.remove();
            });
            container.appendChild(element);
        }
    }
}