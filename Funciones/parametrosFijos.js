"use strict";
(() => {
    //Los signos de interrogacion al definir cada variable indican que es opcional enviar o no ese dato
    //GERARQUIA:los opcionales siempre van al final y los obligatorios al inicio
    const pokemon = "Pikachu";
    function returnNombre(nombre, poder, clase) {
        return `${pokemon} ${clase || ""} ${poder}`;
    }
    let resultado = returnNombre("Picachu", "inpactrueno");
    console.log(resultado);
})();
