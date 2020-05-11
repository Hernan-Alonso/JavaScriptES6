const map = new Map([ 
    ['nombre', 'Producto 1'], 
    ['precio', 20] 
]);


const objeto = Object.fromEntries(map);

console.log(objeto);