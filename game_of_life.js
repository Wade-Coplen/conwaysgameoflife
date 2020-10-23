//need rows and columns

const ROWS = 40;
const COLUMNS = 40;
//double buffer
let currentGeneration = [rows];
let nextGeneration = [rows];

function createGenerationalArray() {
    for(let i = 0; i < ROWS; i++) {
        currentGeneration[i] = new Array(COLUMNS);
        nextGeneration[i] = new Array(COLUMNS);
    }
}
function initializeArrays() {
    for(let i = 0; i < ROWS; i++) {
        for(let j = 0; j < COLUMNS; j++) {
            currentGeneration[i][j] = 0;
            nextGeneration[i][j] = 0;
        }
    }
}
function runWorld() {
    let world =  document.querySelector('#gameBoard');
    let table = document.createElement('table');
    table.setAttribute('id', 'gameBoardTable');
    //setAttribute takes two params...name, value
    //name = name of the attribute whose value is to be set
    //value = what value we are assigining to the attribute..should be a string
for(let i = 0; i < ROWS; i++) {
    //loop over rows one by one
        let tableRow = document.createElement('tr');
        //create a table row and assign it to tableRow variable
        for(let j = 0; j < COLUMNS; j++) {
            //loop over each column one by one, incrementing by one each time.
            let cell = document.createElement('td');
            //starting state for each cell is 'dead'
            //i_j = upper corner 0_0
            //class can toggle dead/alive
            cell.setAttribute('id', `${i}${'_'}${j}`)
            cell.setAttribute('class', 'dead')
            //add an event listener for cell onClick
            cell.addEventListener('click', onClick);
            //create a table data element and assign it to a cell variable
            tableRow.appendChild(cell);
            //append the child element cell to the table row
        }
        table.appendChild(tableRow);
        //append the table row child to the parent table
    }  
    world.appendChild(table);
    //appending upwards once again. the table will append the gameBoard or world. 
}
//onClick function
function onClick() {
    let location = this.id.split('_');
    let row = Number(location[0]); //grab i
    let col = Number(location[1]); //grab j
    //alive/dead
    if(this.className === 'alive') {
        this.setAttribute('class', 'dead');
        currentGeneration[row][col] = 0;
    } else {
        this.setAttribute('class', 'alive');
        currentGeneration[row][col] = 1;
    }
}
window.onload=()=>  {
    runWorld(); //the grid
    createGenerationalArray(); //current and next gens
    initializeArrays(); //set all locations to dead
}
//onload is an EventHandler that processes load events on a Window and other elements.Fires at the end of a document loading. 