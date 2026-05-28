// Arreglos

// const arr = new Array(10); 
// console.log(arr);

let videoGames = ['Mario', 'Zelda', 'Metroid', 'Castlevania'];
console.log({ videoGames });

// Hacer referencia a un arreglo
console.log( videoGames[0]);

let arregloCosas = [
    true,
    123,
    'Carlos',
    1 + 2,
    function(){},
    ()=>{},
    { a: 1},
    ['X', 'Megaman', 'Zero', 'Dr. Light',[
        'Dr. Willy',
        'Woodman'
    ]]
];

// console.log({ arregloCosas });
console.log( arregloCosas[7][4][1]);