import * as ui from './interfaz.js';
import {Api} from './api.js';

ui.fomularioBuscar.addEventListener('submit', e =>{
    e.preventDefault();

    //obtener datos del form
    const artista = document.querySelector('#artista').value;
    const cancion = document.querySelector('#cancion').value;

    if(artista !== '' || cancion !== ''){
        //llamar a la API
        const api = new Api(artista, cancion);
        api.consultarApi()
        .then(cancion =>{
            if(cancion.respuesta.lyrics){
                const letra = cancion.respuesta.lyrics;
                ui.divResultado.textContent = letra;
                

            }else{
                ui.divMensajes.innerHTML = 'La cancion para el artista ingresado no existe. Intenta nuevamente.';
                ui.divMensajes.classList.add('error');
                setTimeout(()=>{
                    ui.divMensajes.innerHTML = '';
                    ui.divMensajes.classList.remove('error');
                    ui.fomularioBuscar.reset();
                },3000);
            }
        })
        
    }else{
        ui.divMensajes.innerHTML = 'Error, todos los campos son obligatorios';
        ui.divMensajes.classList.add('error');
        setTimeout(()=>{
            ui.divMensajes.innerHTML = '';
            ui.divMensajes.classList.remove('error');
        },3000);
    }
});