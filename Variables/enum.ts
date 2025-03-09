(()=>{
    //Los enum enumeran los elementos es decir les da un orden en especifico
    //Si le asignamos el indicador numerico el restoi si
    enum Direcciones{
        arriba,
        abajo,
        izquierda=2,
        derecha,
    }

    enum Estado{
        On="Yes",
        Off="No"
    }

    let direcciones = Direcciones.arriba;
    let direcciones2 = Direcciones.derecha;
    console.log(direcciones);
    console.log(direcciones2);

    let estado = Estado.On;
    console.log(estado);
})()