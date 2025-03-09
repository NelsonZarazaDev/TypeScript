"use strict";
(() => {
    //Los enum enumeran los elementos es decir les da un orden en especifico
    //Si le asignamos el indicador numerico el restoi si
    let Direcciones;
    (function (Direcciones) {
        Direcciones[Direcciones["arriba"] = 0] = "arriba";
        Direcciones[Direcciones["abajo"] = 1] = "abajo";
        Direcciones[Direcciones["izquierda"] = 2] = "izquierda";
        Direcciones[Direcciones["derecha"] = 3] = "derecha";
    })(Direcciones || (Direcciones = {}));
    let Estado;
    (function (Estado) {
        Estado["On"] = "Yes";
        Estado["Off"] = "No";
    })(Estado || (Estado = {}));
    let direcciones = Direcciones.arriba;
    let direcciones2 = Direcciones.derecha;
    console.log(direcciones);
    console.log(direcciones2);
    let estado = Estado.On;
    console.log(estado);
})();
