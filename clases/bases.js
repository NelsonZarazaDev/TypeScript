"use strict";
(() => {
    class Pokemon {
        constructor(nombre, poder, clase) {
            this.nombre = nombre;
            this.poder = poder;
            this.clase = clase;
            this.nombre = nombre;
            this.poder = poder;
            this.clase = clase;
            this.mostrar();
        }
        mostrar() {
            console.log("Hola desde mostrar");
        }
    }
    Pokemon.peso = 23;
    const select = new Pokemon("Pikachu", "impacktrueno", "electrico");
    console.log(select);
    console.log(Pokemon.peso);
    select.mostrar();
    console.log(select.nombre);
})();
