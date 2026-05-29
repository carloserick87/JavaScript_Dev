// Funciones básicas y de flecha

function greet(){
    console.log('Hello world');
};

greet();


// Funcion anónima
const greet2 = function(){
    console.log('Hello World! ');
}

greet2();


function greet3(_name){
    console.log(`Hello ${_name}`);
};

greet3('Carlos Erick');

// Ejemplo de la funcion con mas argumentos
function greet4(nombre){
    console.log(arguments)
}

greet4('Carlos', 39, 'Dublin');


/*     --------------- Funciones de flecha -----------------    */

const greetArrow = (Saludar) => {
    console.log(Saludar);
};

greetArrow('Hola Mundo!');


/*.    --------------- Retorno de las funciones ----------------- */

const results =(a,b)=>{
return a  + b
};

console.log(results(5, 3))

/*    --------------- Funciones de flecha como un solo argumento ----------------- */

const sumar = (a,b) => a + b;

console.log(sumar(5, 5))

// ejercicio

let getAleatorio = ()=> Math.random();
console.log(getAleatorio())