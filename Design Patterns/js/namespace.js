const restApp={};
restApp.platillos = [
    {
        platillo: 'Pizza',
        precio: 200
    },
    {
        platillo: 'Hamburguesa',
        precio: 320
    },
    {
        platillo: 'Hot Dog',
        precio: 100
    }
]

restApp.funciones = {
    ordenar: id =>{
        console.log(
            `Tu platillo: ${restApp.platillos[id].platillo} se esta preparando`
        )
    },
    agregarPlatillo: (platillo,precio) =>{
        const nuevo = {
            platillo,
            precio
        }
        restApp.platillos.push(nuevo);
    },
    mostrarMenu: platillos =>{
        console.log(`Bienvenido a nuestro menu: `);
        platillos.forEach( (platillo, index)=>{
            console.log(`${index} : ${platillo.platillo} - $ ${platillo.precio}`);
        });
    }
}

// console.log(restApp);
// restApp.funciones.ordenar(2);
const {platillos} = restApp;
restApp.funciones.mostrarMenu(platillos);
restApp.funciones.ordenar(1);

restApp.funciones.agregarPlatillo('Pastel', 150);
restApp.funciones.mostrarMenu(platillos);
