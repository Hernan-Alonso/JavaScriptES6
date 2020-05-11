const productos = [
    { nombre: 'Producto 1', precio: 20},
    { nombre: 'Producto 2', precio: 30},
    { nombre: 'Producto 3', precio: 40}
];
//acceder a los elementos de un array de objetos de manera sencilla, adentro del return del flatMap elegis que queres pasar a un unico arreglo, 
// por ejemplo puede ser que solo quieras los nombre de productos seria [producto.nombre] o solo precios [producto.precio]
const resultado = productos.flatMap(producto => [producto.nombre, producto.precio]);
// const resultado = productos.flatMap(producto => [producto.nombre]);
// const resultado = productos.flatMap(producto => [producto.precio]);
// console.log(resultado);
// console.log(resultado.flat(1));
//con flatMap
console.log(resultado);