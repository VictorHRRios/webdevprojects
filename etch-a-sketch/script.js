const grid_size = 16;
const container = document.querySelector(".container");
const square_height = container.clientHeight / grid_size;
const square_width = container.clientWidth / grid_size;
const erase_button = document.querySelector(".erase-button");


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
        container.appendChild(element);
    }
}