//Variables
const email = document.getElementById('email');
const asunto = document.getElementById('asunto');
const mensaje = document.getElementById('mensaje');
const btnEnviar = document.getElementById('enviar');
const formularioEnviar = document.getElementById('enviar-mail');
const resetBtn = document.getElementById('resetBtn');
//EventListeners
eventListeners();
function eventListeners(){
    //Inicio de la app y deshabilitar enviar
    document.addEventListener('DOMContentLoaded', inicioApp);

    //Campos del formulario
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);

    //boton de enviar en el submit
    btnEnviar.addEventListener('click',enviarEmail);

    //reset formulario
    resetBtn.addEventListener('click',vaciarFormulario);
}
//Funciones
function inicioApp(){
    btnEnviar.disabled = true;
}
//valida que el campo tenga algo escrito
function validarCampo(){

    // se valida la longitud del texto y que no este vacio
    validarLongitud(this);
    //validar unicamente email
    if(this.type === 'email'){
        validarEmail(this);
    }
    let errores = document.querySelectorAll('.error');
    if(email.value !== '' && asunto.value !== '' && mensaje.value !== ''){
        if(errores.length === 0){
            btnEnviar.disabled = false;
        }
        
    }
}
//valida la longitud de todos los campos y modifica la clase si tiene o no error
function validarLongitud(campo){
    if(campo.value.length > 0){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
//valida el campo de Email
function validarEmail(campo){
    const mensaje = campo.value;
    if(mensaje.indexOf('@') !== -1){
        campo.style.borderBottomColor = 'green';
        campo.classList.remove('error');
    }else{
        campo.style.borderBottomColor = 'red';
        campo.classList.add('error');
    }
}
//envia el email
function enviarEmail(e){
    //spiner al presionar enviar
    const spinerGif = document.querySelector('#spinner');
    spinerGif.style.display = 'block';
    
    //spiner al presionar enviar
    const enviadoGif = document.createElement('img');
    enviadoGif.src = 'img/mail.gif';
    enviadoGif.style.display = 'block';

    //ocultar Spinner y mostrar enviado
    setTimeout(function(){
        spinerGif.style.display = 'none';
        document.getElementById('loaders').appendChild(enviadoGif);
        setTimeout(function(){
            enviadoGif.remove();
            formularioEnviar.reset();
        },5000);
    }, 3000);
    e.preventDefault();
}
//vacia el formulario
function vaciarFormulario(e){
    e.preventDefault();
    formularioEnviar.reset();
}