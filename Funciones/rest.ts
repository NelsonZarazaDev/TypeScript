(()=>{
    const fullPoder=(poder:string,...dataExtra:string[])=>{
        return `${poder} ${dataExtra.join(" ")}`
    }

    const data = fullPoder("Electrico","picachu","electrico2")
    console.log(data);
})()