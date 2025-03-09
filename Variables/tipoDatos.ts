const n1:number = 20;
let n2:number = 30;

atacar("electrico")

n2=45;

console.log(n2);

function atacar(poder:String){
    console.log(poder.length);
}

// FUNCION QUE SE AUTOLLAMA
(()=>{
    let valor:boolean = false;
    console.log(valor);
})()