//Variables
const buscarBtn = document.getElementById('buscarBtn');
const api = new Api();
const ui = new Interfaz();

//forma en la que se debe buscar
// https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q7dk8htubeGUUNlRe7277fewUvLyJXZu&genreId=KnvZfZ7vAeA&keyword=New%20York


//EventListener
eventListener();

function eventListener (){
    buscarBtn.addEventListener('click', buscarEvento);
}

//Funciones
function buscarEvento (e){
    e.preventDefault();    
    //tomo la opcion seleccionada
    const evento = document.getElementById('evento').value;
    const catLista = document.getElementById('listado-categorias');
    const catSeleccionada = catLista.options[catLista.selectedIndex].value;
    if(evento !== ''){
        api.obtenerEventos(evento,catSeleccionada)
            .then(eventos =>{
                if(eventos.eventos._embedded){
                    const eventosObtenidos = eventos.eventos._embedded.events;
                    //obtuvimos resultados
                    ui.limpiarResultados();
                    ui.mostrarEventos(eventosObtenidos);

                }else{
                    //no hay eventos
                    ui.mostrarMensaje('No se encontraron resultados','alert alert-danger mt-4');
                }
            })
    }else{
        ui.mostrarMensaje('Escribe algo en el buscador', 'alert alert-danger mt-4');
    }
}