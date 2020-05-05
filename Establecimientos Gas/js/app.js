const ui = new Interfaz();

document.addEventListener('DOMContentLoaded',()=>{
    ui.mostrarEstablecimientos();

});

//habilitar busqueda de establecimientos
const buscador = document.querySelector('#buscar input');
    buscador.addEventListener('input', ()=>{
        // console.log('escribiendo');
        if(buscador.value.length > 5){
            ui.obtenerSugerencias(buscador.value);
        }else{
            ui.mostrarEstablecimientos();
        }
    });