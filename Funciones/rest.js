"use strict";
(() => {
    const fullPoder = (poder, ...dataExtra) => {
        return `${poder} ${dataExtra.join(" ")}`;
    };
    const data = fullPoder("Electrico", "picachu", "electrico2");
    console.log(data);
})();
