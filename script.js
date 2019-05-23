
let nombre = "Candela";
let apellido = "Bogado";
let nombreCompleto = nombre + " " + apellido;

let numeros = [10, 7, 8, 0, 4, "Candela"]

numeros.push(35, "Chau");

let persona = {
    nombre : "Candela",
    edad : 38,
    mujer : true,
}

persona.cuadro = "Independiente";


// Bucle For
/* for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
    
} */

//Bucle For In

for (let prop in persona) {
    console.log(persona[prop])
}
