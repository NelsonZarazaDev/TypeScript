"use strict";
(() => {
    var _a;
    let pokemon = {
        nombre: "pikachu",
        poder: "impactrueno",
        clase: "electrico",
        peso: 6,
        nivel: [1, 2, 3]
    };
    pokemon = {
        nombre: "picachu2",
        poder: "impactrueno2",
        clase: "electrico2",
        //peso:25,
        nivel: [2, 3, 4],
        getPoder() {
            return this.poder;
        }
    };
    console.log((_a = pokemon.getPoder) === null || _a === void 0 ? void 0 : _a.call(pokemon));
})();
