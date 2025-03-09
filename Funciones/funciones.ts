// Funcion void auto invocable
(()=>{
    const pokemon:string="Pikachu"
    function returnNombre():String{
        return pokemon;
    }

    const returnNombre2=():string=>{
        return pokemon;
    }

    const nombre = returnNombre();

    console.log(nombre)
    console.log(typeof returnNombre2)
})()