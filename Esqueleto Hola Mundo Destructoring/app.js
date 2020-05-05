const cliente =
{
    nombre: 'Alejandro',
    tipo: 'Premium',
    datos:{
        ubicacion:{
            ciudad: 'Buenos Aires',
            pais: 'Argentina'
        },
        cuenta:{
            desde: '10-12-2010',
            saldo: 1000000
        }
    },
    movimientos: ['12-03-18','11-09-19','01-01-20']
}

// //la forma de acceder a los valores sin hacer notacion de puntos en objetos
// let {nombre,tipo} = cliente;
// //console.log(nombre);
// //console.log(tipo);
// // que pasa cuando tenemos un objeto de objetos?
// // primero se ingresa al objeto padre, y luego por destructoring al objeto de donde se quiere sacar informacion:
// let {datos:{ubicacion}} = cliente;
// console.log(ubicacion);
// console.log(ubicacion.ciudad);
// console.log(ubicacion.pais);
// let {datos:{cuenta}} = cliente;
// console.log(cuenta);
// console.log(cuenta.desde);
// console.log(cuenta.saldo);

//como hacer destrocturing de Arrays
const ciudades = ['Londres', 'Nueva York', 'Buenos Aires', 'Paris',{idioma: 'ingles'}];
// const [
//     primeraCiudad,
//     segundaCiudad
// ] = ciudades;

// console.log(primeraCiudad);
// console.log(segundaCiudad);
//tomar unicamente el ultimo valor? tengo que hacer todas variables que no uso?: no
// const [,,,paris] = ciudades;
//ingresar al primer elemento del array [primerElemento] = ciudades
// console.log(ciudades);

//acceder al Array de cliente nuevo (Movimientos)
// let{movimientos} = cliente;
// console.log(movimientos);
//como accedo a uno de los movimientos?
// let{movimientos:[uno]} = cliente;
// console.log(uno);
//como hago para hacer el ultimo sin los dos primeros?
// let{movimientos:[,,tres]} = cliente;
// console.log(tres);

//destructoring en una funcion
// function reserva(completo,opciones){
//     // let {metodo,pago,dias} = opciones;
//     // console.log(metodo);
//     // console.log(pago);
//     // console.log(dias);
//     

// }
// reserva(true,{
//     metodo: 'Tarjeta',
//     pago: 2000,
//     dias: 3
// });
//que pasa cuando hay algo que es incompleto?
function reserva(completo,
        {
            metodo = 'efectivo',
            pago = 0,
            dias = 0
        } = {}
    ){
        // if(completo){
        //     console.log('Proceder a Reservar');
        // }else{
        //     console.log('Abandonar');
        // }
    }
reserva(true,{
    metodo: 'Tarjeta',
    pago: 2000,
    dias: 3
});
/***************************************************************************************************************************** */
//Symbolos
const simbolo = Symbol();
//un symbol es unico siempre q se inicia de otro, symbol() === symbol() = false
let nombre = Symbol();
let apellido = Symbol();

let persona = {}
    persona.nombre = 'Juan';
    persona[nombre] = 'Juan';
    persona[apellido] = 'perez';
    persona.saldo = 100;
    persona.tipoCliente = 'Normal';

// console.log(persona);   
//para acceder a los symbolos siempre debe ser con notacion tipo array de posicion, si se hace con notacion de puntos ingresa a la propiedad del objeto
//los symbols no pueden ser iterados en un for

/***************************************************************************************************************************** */
//SETS y MAP
//sets son parecidos a un array
let carrito = new Set();
    carrito.add('Camisa');
    carrito.add('Disco #1');
    carrito.add('Disco #2');
    carrito.add('Disco #3');
    /// un Set no va a duplicar objetos, si encuentra el mismo valor no lo repite
    carrito.add('Disco #1');

//comprobar que algo exista en el Set
    // console.log(carrito.has('Camisa'));
    // console.log(carrito.has('Pantalon'));
// quitar un elemento del set
    carrito.delete('Disco #2');    
    // console.log(carrito);
// los Sets se pueden recorrer con forEach
carrito.forEach((producto,index) =>{
    // console.log(`${index}:${producto}`);
});
//en los Sets las llaves y los valores son iguales
//convertir un Set a arreglo Array
const arrayCarrito = [...carrito];
// console.log(arrayCarrito);    
// console.log(carrito.size);

//MAPS
let integrante = new Map();
    integrante.set('nombre','Juan');
    integrante.set('tipo','Premium');
    integrante.set('saldo',3000);
//acceder a los valores
// console.log(integrante.get('nombre'));
// console.log(integrante.get('tipo'));
// console.log(integrante.get('saldo'));


//metodos de Maps
//Tamanio del map
// console.log(integrante.size);
//si tiene data
// console.log(integrante.has('saldo'));
// console.log(integrante.has('apellido'));
//borrar elementos del map
// integrante.delete('saldo');
//limpiar el Map
// integrante.clear();
// console.log(integrante);
//pasarle propiedades por Default
let paciente = new Map([['nombre','paciente'],['cuarto','No definido']]);
    //el Map evita duplicados pero usa el ultimo valor
    paciente.set('cuarto', 400);
    paciente.set('cuarto', 500);

    //se puede recorrer en un forEach
    paciente.forEach((datos,index)=>{
        // console.log(`${index},${datos}`);
    })
// console.log(paciente);





