//need rows and columns

const ROWS = 40;
const COLUMNS = 40;

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
            let cell = document.creatElement('td');
            //create a table data element and assign it to a cell variable
            tr.appendChild(cell);
            //append the child element cell to the table row
        }
        table.appendChild(tr);
        //append the table row child to the parent table
    }  
    world.appendChild(table);
    //appending upwards once again. the table will append the gameBoard or world. 
}
window.onLoad=()=> {
    runWorld()
}
//onload is an EventHandler that processes load events on a Window and other elements.Fires at the end of a document loading. 