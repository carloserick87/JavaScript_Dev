let games = ['Zelda', 'Mario', 'Metroid', 'Castlevania'];
console.log('Largo:', games.length);

let first = games[0];
let last = games[games.length - 1];

console.log({ first, last });

games.forEach((elemento, indice, arr)=>{
    console.log({elemento, indice, arr});
})




let newLength = games.push('Donkey Kong');
console.log({newLength, games});

games.unshift('F-Zero');
console.log({games});

let poppedGame = games.pop();
console.log({poppedGame, games});

let shiftedGame = games.shift();
console.log({shiftedGame, games});

// Eliminar un elemento específico

let pos = 1;
let deletedGames = games.splice(pos, 1);
console.log({deletedGames, games});

// Agregar un elemento

pos = 3;
let newGames = games.splice(pos, 0, 'Kirby');
console.log({newGames, games});

// Agregar varios elementos

games.splice('Metroid','Kirby','Castlevania');
console.log({games});

// Reemplazar un elemento

//  games.splice(2, 1, 'Mario Kart');
//  console.log({games});

// Encontrar un elemento

let metroIndex = games.indexOf('Metroid');
console.log({metroIndex});


/*  ***************  Otros metodos ***************  */

const numeros = [1, 2, 3, 4, 5];

//Map 

const numerosDobles = numeros.map((num)=>{
    return num * 2;
});

console.log({ numerosDobles });


