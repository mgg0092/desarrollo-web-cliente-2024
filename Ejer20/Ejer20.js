function createTable() {
    const Table = [];
    for (let i = 0; i < 4; i++) {
        const fila = [];
        for (let j = 0; j < 5; j++) {
            Table[i][j] = '*';
        }
    }
}

function giveNumber() {
    let x, y;
    do {
        x = Number(prompt('Introduce la primera cordenada (No puede empezar por 0): '));
        y = Number(prompt('Introduce la segunda cordenada: '));
    }while(isNaN(x) || x === 0 && isNaN(y));

    return x, y;
}

function CheckCoordinate(x,y) {
    if (Table[x][y] != 'mina') {
        Table[x][y] = '_';
    }else if (Table[x][y] === 'mina') {
        Table[x][y] = 'X';
    }else if (Table[x][y] === 'tesoro') {
        Table[x][y] = '€';
    }
}

function StartGame() {
    let x, y;
    createTable();
    for (let i = 0; i < 3; i++) {
        x, y = giveNumber();
        CheckCoordinate(x,y);
    }
}
