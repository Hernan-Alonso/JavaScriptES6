// this con Window Binding
function obtenerAuto(){
    console.log(`Mi auto es color ${this.color}`);
}
//como la funcion no encuentra donde buscar el color, lo busca en el window, por eso al ingresar como window.color devuelve el valor correctamente

const color = 'Negro'; // undefined
window.color = 'Negro'; // color Negro
obtenerAuto();