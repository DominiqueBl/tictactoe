let fields = [];
let currentShape = 'cross'; //shapes get transformed into a variable to show cross OR circle
let gameOver = false;


function fillMatchfield(id) {
    if (!fields[id] && !gameOver){ //Wenn !: wenn bereits etwas im Feld steht, führe untere if-Abfrage aus


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
}

function restartGame(){
    gameOver = false;
    fields = [];
    document.getElementById('gameOver').classList.add('d-none');
    document.getElementById('button').classList.add('d-none');

    for (let i = 1; i < 8; i++) {
        document.getElementById('line' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('circle-' + i).classList.add('d-none');
        document.getElementById('cross-' + i).classList.add('d-none');
    }
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

    //first row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {  //wenn feld 0,1&1,2,also die ersten drei Felder gleich sind(zB mit Crosses oder Circles)hat jmd gewonnen
        winner = fields[0];
        document.getElementById('line1').style.transform = 'scaleX(1)';
    }

    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {  
        winner = fields[4];
        document.getElementById('line2').style.transform = 'scaleX(1)';
    }

    if (fields[7] == fields[8] && fields[8] == fields[9] && fields[7]) { 
        winner = fields[7];
        document.getElementById('line3').style.transform = 'scaleX(1)';
    }

    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {  
        winner = fields[0];
        document.getElementById('line4').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {  
        winner = fields[1];
        document.getElementById('line5').style.transform = 'rotate(90deg) scaleX(1)';

    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {  
        winner = fields[2];
        document.getElementById('line6').style.transform = 'rotate(90deg) scaleX(1)';
    }

    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {  
        winner = fields[0];
        document.getElementById('line7').style.transform = 'rotate(45deg) scaleX(1.2)';

    }

    //if (fields[0] == fields[5] && fields[5] == fields[8] && fields[0]) { 
      //  winner = fields[0];
       // document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    //}

    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {  
        winner = fields[2];
        document.getElementById('line8').style.transform = 'rotate(-45deg) scaleX(1.2)';
    }

    if (winner) {
        console.log('you win', winner);
        gameOver = true;
        setTimeout(function(){
            document.getElementById('gameOver').classList.remove('d-none');
            document.getElementById('button').classList.remove('d-none');
        }, 1000);
    }
}