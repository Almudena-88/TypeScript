// Validación de tipos: asignación o inferencia de tipos, type guards (narrowing o typeof)

const hello = "Saludo"; //Inferencia de tipos
console.log(typeof hello);


function minuscula(texto: string): string {
    return texto.toLowerCase();
}
console.log(minuscula(hello));

function mayuscula(texto: string): string {
    return texto.toUpperCase();
}
console.log(mayuscula(hello));

let nombre: String = "Almudena"; //Asignación de tipos 

let numero: number = 5;
let hexa = 0xbeef;
let bin: number = 0b0010;

let si: boolean = true;
let no = false;

let numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let futbolista: [string, number] = ["Ramon", 32];
console.log(numeros[5]);
console.log(futbolista);

enum Direccion {
    Norte,
    Sur,
    Este,
    Oeste
}
let direccionEscogida: Direccion = Direccion.Este;

// Type Narrowing: reducir un tipo más amplio a otro más específico mediante comprobaciones

function procesar(valor: number | string) {
    console.log(valor) //Aquí "valor" aún puede ser string o number
    if (typeof valor === 'number') {
        console.log("valor es un numero: ", valor.toFixed(2)) //Aquí ya es number

    } else {
        console.log("valor es una cadena:", valor.toUpperCase) // Y aquí ya es string
    }
}