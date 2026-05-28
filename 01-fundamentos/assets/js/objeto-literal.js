// Objetos literales

let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion:{
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre',personaje.nombre);
console.log('Nombre',personaje['direccion']);
console.log('Edad', personaje.edad);

console.log('Coords', personaje.coords);
console.log('Coords', personaje.coords.lat);

console.log('N° Trajes', personaje.trajes.length);
console.log('Ultimo traje es : ', personaje.trajes[2]);

const x = 'vivo';
console.log('Vivo', personaje[x]);

console.log('Ultima pelicula: ', personaje['ultima-pelicula']);



/*  ----------------- Más detalles----------------- */

// Eliminar una propiedad
delete personaje.edad;
console.log( personaje );

// Crear una nueva propiedad en el objeto

personaje.casado = true;

// Convertir un objeto a un array
const entriesPares = Object.entries( personaje);
console.log( entriesPares );

// bloquear que no se modifique el objeto
Object.freeze( personaje );

personaje.dinero = 100000;
console.log( personaje );
personaje.direccion.ubicacion = 'Costa Rica'; /* Para bloquear el cambio de los otros objetos se 
vuelve a congelar con Object.freeze( personaje.direccion ) */
console.log( personaje );

// Listado de todas las propiedades de un objeto
const propiedades = Object.getOwnPropertyNames( personaje );
const valores = Object.values( personaje );
console.log( propiedades,valores);
