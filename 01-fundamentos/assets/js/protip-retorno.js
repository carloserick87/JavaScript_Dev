// function crearPersona( nombre, apellido){
//     return {
//         nombre,
//         apellido
//     }
// }

const crearPersona = ( nombre, apellido) =>({nombre, apellido})

const persona = crearPersona('Carlos', 'Mandujano' );
console.log( persona );

function imprimeArgumentos(){
    console.log( arguments );
};

imprimeArgumentos(10, true, false, 'Carlos', 'Hola');


/* ----------- Trabajar con arguments ----------- */

const imprimeArgumentos2 = (...args) =>{
    console.log( args);
}

imprimeArgumentos2('Erick',39 , false, true, 'Hi' );


/* ----------- Trabjar con funciones con valores  ----------- */

const imrpimeArgumentos3 = (...args) =>{
    return args;
}

const [casado, vivo, nombre, saludo] = imrpimeArgumentos3(true, true, 'Carlos','Hi');
console.log({casado, vivo, nombre, saludo});

/* ------------------ Cambiar el nombre de la variable ------------------- */

const{ apellido: nuevoApellido} = crearPersona('Carlos', 'Mandujano' );
console.log({nuevoApellido});


/* ------------------ Destructuración de argumentos ------------------- */

const tony = {
    nombre: 'Tony',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};
const imprimePropiedades = ({nombre, codeName, vivo, edad, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}


imprimePropiedades(tony);