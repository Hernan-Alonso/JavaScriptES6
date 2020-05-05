function crearIterador(carrito){
    //Iniciar la variable que recorrera el arreglo
    let i = 0;

    //generar la funcion de return para devolver en cada vuelta los valores obtenidos
    return{
        //crear la propiedad que va a generar la funcion para el recorrido del arreglo
        siguiente:()=>{
            //variable para conocer si llegue al final del array o todavia puedo seguir iterando
            let fin = (i >= carrito.length);
            //variable para guadar el valor de la iteracion en donde estoy
            // siempre que no sea el Fin y exista valor en el carrito, devolverlo, sino devolver undefined
            let valor = !fin ? carrito[i++] : undefined;

            //devuelvo las variables de fin y el valor obtenido
            return{
                fin: fin,
                valor: valor
            }
        }
    }
}
//Creo mi arreglo
const carrito = ['Producto 1', 'Producto 2', 'Producto 3', 'Producto 4'];
//creo la variable que va a guardar la data del iterador
// const recorrerCarrito = crearIterador(carrito);
//ingreso por notacion de puntos a la propiedad que es la funcion que iterara en el array
// console.log(recorrerCarrito.siguiente());
//siempre que se pida un .siguiente(), mostrara el siguiente valor del arreglo, (a diferencia del for que recorre todo en un llamado, este hay que llamarlo para que vaya iterando)
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
// console.log(recorrerCarrito.siguiente());
//Cuando termina el array, devuelve el valor de fin en true y el valorde la variable como undefined
// console.log(recorrerCarrito.siguiente());

//UNA MANERA MAS SENCILLA DE GENERAR UN ITERADOR ES POR MEDIO DE UN GENERADO, ESTOS SON FUNCIONES CON NOTACION * AL PRINCIPIO DEL NOMBRE DE FUNCION Y TIENEN LA PARTICULARIDAD
//DE TENER UNA NOTACION DE VALOR COMO yield valor;

function *crearGenerador(){
    //utilizo yield para darle valores
    // yield acepta todas las notaciones basicas de JS
    yield 1;
    yield 'Nombre';
    yield 3+3;
    yield true
}

//creo un iterador con la funcion
const iterador = crearGenerador();

//al igual que el iterador, debo ir llamando cada vez q quiero iterar, sino, no iterara (a diferencia del for)
// a diferencia del Iterador que creamos, donde llamabamos la funcion como queriamos, aca se usa .next() que es la notacion propia de un generador para ir iterando entre
// valores y usamos .value para acceder al valor.
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
//cuando se termina de llamar al ultimo valor del generador, el siguiente y los que sigan, devolvera undefined
console.log(iterador.next().value);
console.log(iterador.next().value);
console.log(iterador.next().value);
