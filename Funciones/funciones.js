"use strict";
// Funcion void auto invocable
(() => {
    const pokemon = "Pikachu";
    function returnNombre() {
        return pokemon;
    }
    const returnNombre2 = () => {
        return pokemon;
    };
    const nombre = returnNombre();
    console.log(nombre);
    console.log(typeof returnNombre2);
})();
