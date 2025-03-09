(()=>{
    const numeros:number[] = [1,5,7,8,9,45];
    console.log(numeros)

    const arregloMultiple:(string|number|boolean)[] = [1,5,7,8,9,45,"Hola mundo", true];
    arregloMultiple.push(false)
    console.log(arregloMultiple)

    numeros.forEach(dato=>console.log(dato));


    // TUPLAS
    const tuplas:[string,number] = ["Hola mundo",45];
    tuplas[0]="Hola";
    console.log(tuplas)
})()