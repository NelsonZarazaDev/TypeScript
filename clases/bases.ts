(()=>{

    class Pokemon{
        static peso:number=23;

        constructor(private nombre:string, private poder:string, public clase:string){
            this.nombre=nombre;
            this.poder=poder;
            this.clase=clase;
            this.mostrar();
        }

        private mostrar():void{
            console.log("Hola desde mostrar")
        }
    }
    const select:Pokemon=new Pokemon("Pikachu","impacktrueno","electrico")
    console.log(select)
    console.log(Pokemon.peso)
    select.mostrar()
    console.log(select.nombre)



})()