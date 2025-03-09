(()=>{

    type propiedades ={
        nombre:string,
        poder:string,
        clase:string,
        peso?:number,
        nivel:number[],
        getPoder?:()=>string
    }

    let pokemon:(string|number | propiedades)="Picachu";
    console.log(pokemon)

    pokemon=45;
    console.log(pokemon)

    pokemon={
        nombre:"picachu",
        poder:"impactrueno",
        clase:"electrico",
        nivel:[1,2,3]
    }
    console.log(pokemon)

})()