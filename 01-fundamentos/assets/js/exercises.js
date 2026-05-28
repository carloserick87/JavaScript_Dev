/*  Ejercicios de arreglos. */

// ForEach
const numeros = [1, 2, 3, 4, 5];

 numeros.forEach((numero )=>{
     console.log(numero * 2);
});


// Map
const precios = [10, 20, 30, 40];

let descuentos = precios.map((costo)=>{
    return costo * 1.15
});

console.log({descuentos});

const edades = [12, 18, 25, 17, 30, 15];

// Filter
let mayoresDeEdad = edades.filter((mayores)=>{
    return mayores >= 18;
})
console.log({mayoresDeEdad});


// Find
const usuarios = [
    { nombre: 'Ana', edad: 20 },
    { nombre: 'Luis', edad: 17 },
    { nombre: 'Carlos', edad: 25 }
];

let findUser = usuarios.find((usuario)=>{
    return usuario.edad>21;
})
console.log({findUser});

// Some

const productos = [
    { nombre: 'Laptop', stock: 0 },
    { nombre: 'Mouse', stock: 5 },
    { nombre: 'Teclado',stock: 2 }
];

let isThereStock = productos.some((products)=>{
    return products.stock<=0;
})
console.log({isThereStock});

// Splice

const frutas = ['manzana','pera', 'uva', 'banana'];

let pos = 1

frutas.splice(pos, 1, 'naranja');

console.log({frutas});

// Challenge

const numeros2 = [1, 2, 3, 4, 5]

let resultado = numeros2.map((num)=>{
    return num * 10;
});

console.log({resultado});


/*  ----------- Más Metodos de arreglos -----------  */

// Reduce
const number_list = [1, 2, 3, 4 ];

const total = number_list.reduce((acumulador, num_)=>{
    return acumulador + num_;
}, 0);

console.log({total});


// Every

const holders = [18, 20, 25];
const allAdults = holders.every((holder)=>{
    return holder >= 18;
});
console.log({allAdults});


// Includes

const fruits = [ 'manzana', 'pera','uva' ];
console.log(fruits.includes('pera'));


// Sort

const numbers = [1, 10, 2];

numbers.sort((a, b) => {
    return a - b;
});

console.log({numbers});


// flatMap

const frases = ["hola mundo", "javascript es genial"];

const palabras = frases.flatMap((frase) => {
    return frase.split(" ");
});

console.log({palabras});