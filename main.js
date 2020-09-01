const CELLS = document.getElementsByClassName("cell");
let active_cell;

for (cell of CELLS) {
    cell.addEventListener('click', function(e) {
        if (this.classList.contains("active")) {
            this.innerHTML = '○';
            this.classList.remove("active");
            this.classList.add("player")
        }
        active_cell = document.getElementsByClassName("active");
        enemy_action(active_cell);
    });
}

let enemy_action = active_cell => {
    pos = Math.floor(Math.random() * active_cell.length);
    active_cell[pos].innerHTML = 'X';
    active_cell[pos].classList.remove("active");
}