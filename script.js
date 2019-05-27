
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

/* for (let prop in persona) {
    console.log(persona[prop])
}
 */

/* let dos = document.getElementById("item2")
let items = document.getElementsByClassName("item")
let lis = document.getElementsByTagName("li") */

/* let dos = document.querySelector('#item2')
let items = document.querySelector(".item")

console.dir(items) */

let p = document.createElement("p")
p.innerText = "Mi nuevo texto"
p.id = "nuevo"
p.className = "item"

let body = document.querySelector("body")

body.appendChild(p)

//console.log(p)

/*
1) Crear un elemento <li> y ponerle un texto.
2) Meterlo como primer ítem del <ul>.

EXTRA
1) Crear un elemento <ul> nuevo y vacío.
2) Hacer un bucle de 5 iteraciones.
3) Por iteración de ciclo, se tiene que crear un <li> nuevo.
4) Agregar todos los <li> al <ul> del punto 1.
5) Agregar el <ul> del punto 1 al DOM.
*/


//Ejercicio 1
let nuevoLi = document.createElement("li")
nuevoLi.innerText = "Ítem 0 - Agregado"
nuevoLi.id = "item0"
nuevoLi.className = "item"

let listaOrig = document.getElementById("ListaOriginal")
let item1 = document.getElementById("item1")
listaOrig.insertBefore(nuevoLi,item1)

//EXTRA

//1) Crear un elemento <ul> nuevo y vacío.
let nuevoUl = document.createElement("ul")

//2) Hacer un bucle de 5 iteraciones.
for(let i=0; i<5; i++) {
//3) Por iteración de ciclo, se tiene que crear un <li> nuevo.
let otroLi = document.createElement("li")
otroLi.innerText = "Nuevo Texto " + i
//4) Agregar todos los <li> al <ul> del punto 1.
nuevoUl.appendChild(otroLi)
}

//5) Agregar el <ul> del punto 1 al DOM.
body.appendChild(nuevoUl)


