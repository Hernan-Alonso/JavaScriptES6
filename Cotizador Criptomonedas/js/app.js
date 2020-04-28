//crypto api
// https://www.cryptocompare.com/cryptopian/api-keys
//Spinner data
// https://tobiasahlin.com/spinkit/

//Variables
const api = new Api('2aa73f6cf03edbc963e4efb26396a94f35ba5cb326275b7021c76dc8096d10e7');
const ui = new Intefaz();
const monedaLista = document.getElementById('moneda');
const formulario = document.querySelector('#formulario');
const criptomonedaLista = document.getElementById('criptomoneda');


//EventListener
eventListener();
function eventListener()
{
    formulario.addEventListener('submit', cotizarMoneda);
}
//funciones
function cotizarMoneda(e){
    e.preventDefault();

    //leer los valores 
    const monedaSeleccionada = monedaLista.options[monedaLista.selectedIndex].value;
    const criptoSeleccionada = criptomonedaLista.options[criptomonedaLista.selectedIndex].value;

    //no deben estar vacios
    if(monedaSeleccionada === '' || criptoSeleccionada === ''){
        ui.mostrarMensaje('Ambos campos son obligatorios', 'alert bg-danger text-center');
    }else{
        api.obtenerValores(monedaSeleccionada, criptoSeleccionada)
            .then(data =>{
                ui.mostrarResultado(data.resultado.RAW,monedaSeleccionada,criptoSeleccionada);
            })
    }
}