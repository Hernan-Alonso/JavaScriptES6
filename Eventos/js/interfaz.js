class Interfaz{
    constructor(){
        //inicia la app al instanciar
        this.init();
        // leer el resultado 
        this.listado = document.getElementById('resultado-eventos');
    }

    //metodo para cuando inicia la app
    init(){
        this.imprimirCategorias();
    }

    //imprimir categorias
    imprimirCategorias(){
        const listaCategorias = api.obtenerCategorias()
            .then(categorias =>{
                const cat = categorias.categorias;
                
                const selectCategoria = document.getElementById('listado-categorias');

                cat.forEach(category => {
                    const option = document.createElement('option');
                    option.value = category.type.id;
                    option.appendChild(document.createTextNode(category.type.name));
                    selectCategoria.appendChild(option);
                })

            })
    }

    mostrarMensaje(mensaje,clase){
        const div = document.createElement('div');
        div.classList = clase;
        div.appendChild(document.createTextNode(mensaje));
        //buscar el div para insertar
        const buscadorDiv = document.querySelector('#buscador');
        buscadorDiv.appendChild(div);
        setTimeout(()=>{
            this.limpiarMensaje();
        },3000);
    }

    limpiarMensaje(){
        const alert = document.querySelector('.alert');
        if(alert){
            alert.remove();
        }
    }
    //limpiar listado de eventos al buscar
    limpiarResultados(){
        this.listado.innerHTML = '';
    }
    //imprime los resultados de la Api
    mostrarEventos(eventos){
        //leer los eventos y agregarlos a una variable
        eventos.forEach(evento =>{
            this.listado.innerHTML +=
            `
                <div class="col-md-4 mb-4>
                    <div class="card>
                            <img class="img-fluid mb-2" src="${evento.images[5].url}"/>
                        <div class="card-body">
                            <div class="card-text">
                                <h2 class="text-center">${evento.name}</h2>
                                <p class="lead text-info">Informacion del evento</p>
                                <p>Status: ${evento.dates.status.code}</p>
                                <p>${evento.info !== undefined ? evento.info.substring(0,200):'No hay informacion disponible'}</p>
                                <span class="badge badge-primary">Precio: $${evento.priceRanges !== undefined ? evento.priceRanges[0].max : 'Este evento es gratuito'}</span>
                                <span class="badge badge-secondary"> Fecha y hora: ${evento.dates.start.localDate} - ${evento.dates.start.localTime}</span>
                                <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
            `;
        })
    }

}