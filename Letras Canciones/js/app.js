import * as ui from './interfaz.js';

ui.fomularioBuscar.addEventListener('submit', e =>{
    e.preventDefault();

    //obtener datos del form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista !== '' || cancion !== ''){
        //llamar a la API
        
    }else{
        ui.divMensajes.innerHTML = 'Error, todos los campos son obligatorios';
        ui.divMensajes.classList.add('error');
        setTimeout(()=>{
            ui.divMensajes.innerHTML = '';
            ui.divMensajes.classList.remove('error');
        },3000);
    }
});