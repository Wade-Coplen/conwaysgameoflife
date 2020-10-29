//I will need to know when the 'start' button has been clicked
//and as such, know if what 'state' is currently being toggled. 
//repeat the evolution process
//speed control
let start = false // set tru when click starts
let timer; //evo control
let evolutionSpeed = 100; // one second per gen
//Presets
let rorschach=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,
    0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,
    0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,
    0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let squareDance=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,
    0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,
    0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,
    0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
    0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
//need rows and columns
const ROWS = 40;
const COLUMNS = 40
;
//double buffer
let currentGeneration = [ROWS];
let nextGeneration = [ROWS];

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
            cell.addEventListener('click', cellClick);
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
function cellClick() {
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
function makeNextGeneration() {
    for(row in currentGeneration) {
        for(col in currentGeneration[row]) {
            let neighbors = neighborsCount(row, col);
            //Check the rules
            //if Alive
            if(currentGeneration[row][col] == 1) {
                if (neighbors < 2) {
                    nextGeneration[row][col] = 0;
                } else if(neighbors == 2 || neighbors == 3) {
                    nextGeneration[row][col] = 1;
                } else if(neighbors > 3) {
                    nextGeneration[row][col] = 0;
                }
            } else if(currentGeneration[row][col] == 0) {
                //if Dead or Empty
                if(neighbors == 3) {
                    //propogate
                    nextGeneration[row][col] = 1;
                }
            }
        }
    }
}
function neighborsCount(row, col) {
    let count = 0;
    let neighborRow = Number(row);
    let neighborColumn = Number(col);
        //Make sure we are not in the first row
        if(neighborRow - 1 >= 0) {
        //check top neighbor
        if(currentGeneration[neighborRow - 1][neighborColumn] == 1)
            count++;
        }
        //make sure we are not in the first cell
        //upper left corner
        if(neighborRow - 1 >= 0 && neighborColumn - 1 >= 0) {
        //check upper left neighbor
        if(currentGeneration[neighborRow - 1][neighborColumn - 1] == 1)
            count++;
        }
        //Make sure we are not on the first row last column
        if(neighborRow - 1 >= 0 && neighborColumn + 1 < COLUMNS) {
            if(currentGeneration[neighborRow - 1][neighborColumn + 1] == 1)
                count++;
        }
    //Make sure we are not on the first column
    if(neighborColumn - 1 >= 0) {
        //Check left neighbor
        if(currentGeneration[neighborRow][neighborColumn - 1] == 1)
            count++;
    }
    //Make sure we are not on the last column
    if(neighborColumn + 1 >= 0) {
        //Check left neighbor
        if(currentGeneration[neighborRow][neighborColumn + 1] == 1)
            count++;
    }
    //Make sure we are not on the bottom left corner
    if(neighborRow + 1 < ROWS && neighborColumn - 1 >= 0) {
        //Check bottom left neighbor
        if(currentGeneration[neighborRow + 1][neighborColumn - 1] == 1)
            count++;
    }
    if(neighborRow + 1 < ROWS && neighborColumn + 1 < COLUMNS) {
        //Check bottom right neighbor
        if(currentGeneration[neighborRow + 1][neighborColumn + 1] == 1)
            count++
    }
    //Make sure we are not on the last row
    if(neighborRow + 1 < ROWS) {
        //Check bottom neighbor
        if(currentGeneration[neighborRow + 1][neighborColumn] == 1)
            count++;
    }
    return count;
}
  
    function updateCurrentGeneration() {
        for(row in currentGeneration) {
            for(col in currentGeneration[row]) {
                //update the current generation with 
                //the results of the createNextGeneration function
                currentGeneration[row][col] = nextGeneration[row][col];
                //set nextGeneration back to empty
                nextGeneration[row][col] = 0;
                
            }
        }
    }
function updateRunWorld() {
    let cell = '';
    for(row in currentGeneration) {
        for(col in currentGeneration[row]) {
            cell = document.getElementById(`${row}${'_'}${col}`);
            if(currentGeneration[row][col] == 0) {
                cell.setAttribute('class', 'dead');
            } else {
                cell.setAttribute('class', 'alive')
            }
        }
    }
}

function evolution() {
    makeNextGeneration();
    updateCurrentGeneration();
    updateRunWorld();

    if (start) {
        timer = setTimeout(evolution, evolutionSpeed)
    }
}
function startStop() {
    //if state is 'start'
    let startstop = document.querySelector('#buttonstartandstop');

    if(!start) {
        start = true;
        startstop.value = 'Stop Production';
        evolution();
    } else {
        start = false;
        startstop.value = 'Start Production';
        clearTimeout(timer);
    }
}
function generationCount(){
  let count = 0;
  while(evolution) {
      count = count++
  }

}

function presetOne() {
    


}

function resetWorld() {
    location.reload();
}

window.onload=()=>  {
    runWorld(); //the grid
    createGenerationalArray(); //current and next gens
    initializeArrays(); //set all locations to dead
}
//onload is an EventHandler that processes load events on a Window and other elements.Fires at the end of a document loading. 