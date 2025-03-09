"use strict";
const n1 = 20;
let n2 = 30;
atacar("electrico");
n2 = 45;
console.log(n2);
function atacar(poder) {
    console.log(poder.length);
}
// FUNCION QUE SE AUTOLLAMA
(() => {
    let valor = false;
    console.log(valor);
})();
