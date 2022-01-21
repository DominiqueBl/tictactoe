let fields = [];
let currentShape = 'cross'; //shapes get transformed into a variable to show cross OR circle

function fillMatchfield(id) {
    if (currentShape == 'cross') {
        currentShape = 'circle';
        document.getElementById('player1').classList.remove('playerInactive');
        document.getElementById('player2').classList.add('playerInactive');

    } else {
        currentShape = 'cross';
        document.getElementById('player1').classList.add('playerInactive');
        document.getElementById('player2').classList.remove('playerInactive');
    }

    fields[id] = currentShape; //id für bestimmte Stelle im Array fields durch Variable currentShape
    console.log(fields); //to control if Array shows Werte

    draw();
    checkForWin();
}

function draw() {
    for (let i = 0; i < fields.length; i++) { //i+1
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');
        }

        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}

function checkForWin() {
    let winner;

    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[0];
    }

    if (fields[4] == fields[5] && fields[5] == fields[6] && fields[4]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[4];
    }

    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[7];
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[0];
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[1];
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[2];
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[0];
    }

    if (fields[0] == fields[5] && fields[5] == fields[8] && fields[0]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[0];
    } 

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[2];
    }

 if (winner){
     console.log('you win', winner);
 }
}