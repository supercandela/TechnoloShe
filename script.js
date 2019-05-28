
let btn = document.querySelector("button")

/* function hacerClick() {
    console.log("Hiciste Click!") 
}
btn.addEventListener("click", hacerClick) */


 /* Ejercicio
 Reemplazar el código de la función hacerClick por:
 1) Crear un botón por cada click que se haga.
 2) Cada botón nuevo se tiene que ver en el DOM.
 3) Cada botón nuevo tiene que tener un nuevo callback en su propio evento click también.
 4) Todos los botones en pantalla tienen que tener como texto "Botón N", donde N es un número arrancando de 1, el cual se va aumentando de a una unidad. */



 let i = 1

function agregarBoton() {
    let body = document.querySelector("body")
    let botonCreado = document.createElement("button") 
    body.appendChild(botonCreado)
    botonCreado.innerText = "Botón " + i
    botonCreado.addEventListener("click", funcionRepetida)
    i = i + 1     
 }
 btn.addEventListener("click", agregarBoton)
 
 function funcionRepetida() {
     console.log("Le hiciste click a un botón recién creado")
 }
 
 /*
En un HTML nuevo:
1) Hacer una etiqueta button, con un texto que diga "Crear párrafo!".
2) En JS, agarrar ese nodo.
3) Registrarle un callback a su click.
4) El callback del botón tiene que poder crear la siguiente estructura:
<div>
 <p>Lorem Ipsum</p>
 <button>Borrar</button>
</div>

5) El botón que tiene el texto "Borrar" también tiene que tener un click y su callback tiene que poder borrar el elemento <p>, usando la función
Nodo.removeChild(Nodo)

 */