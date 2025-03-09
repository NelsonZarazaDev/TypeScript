(()=>{
    //Los signos de interrogacion al definir cada variable indican que es opcional enviar o no ese dato

    //GERARQUIA:los opcionales siempre van al final y los obligatorios al inicio
    const pokemon:string="Pikachu"
    function returnNombre(nombre:string,poder:string, clase?:string):String{
    return `${pokemon} ${clase || ""} ${poder}`;
    }
    let resultado = returnNombre("Picachu","inpactrueno");
    console.log(resultado)
})()
