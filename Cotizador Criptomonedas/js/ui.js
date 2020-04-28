class Intefaz{

    constructor(){
        this.init();
    }
    init(){
        this.construirSelect();
    }

    construirSelect (){
        api.obtenerMonedas()
            .then(monedas =>{
                const criptomonedaLista = document.getElementById('criptomoneda');
                //iterar todos los resultados de la API de forma que el objeto con el nombre, pasa a ser el primer data del array asi se puede recorrer.
                for ( const [key, value] of Object.entries(monedas.monedas.Data)){
                    //agragar el simbolo y nombre como opciones de nuestro select
                    const opcion = document.createElement('option');
                    opcion.value = value.Symbol;
                    opcion.appendChild(document.createTextNode(value.CoinName));
                    criptomonedaLista.appendChild(opcion);
                }
            })
    }

    mostrarMensaje(mensaje,clases){
        const div = document.createElement('div');

        div.className = clases;
        div.appendChild(document.createTextNode(mensaje));
        
        //seleccionar mensajes y mostrar contenido
        const divMensaje = document.querySelector('.mensajes');
        divMensaje.appendChild(div);

        setTimeout(() => {
            document.querySelector('.mensajes div').remove();
        },3000);
    }

    //imprime el resultado
    mostrarResultado(resultado, moneda, criptomoneda){
        const datosMoneda = resultado[criptomoneda][moneda];

        let precio = datosMoneda.PRICE.toFixed(2);
        let porcentaje = datosMoneda.CHANGEPCTDAY.toFixed(2);
        let fecha = new Date(datosMoneda.LASTUPDATE * 1000).toLocaleDateString('es-AR');

        //construir el template
        let templateHtml = `
        <div class="card bg-warning">
            <div class="card-body text-light">
                <h2 class="card-title">Resultado: </h2>
                <p> El precio de ${datosMoneda.FROMSYMBOL} a moneda ${datosMoneda.TOSYMBOL} es de: $${precio}</p>
                <p> Variacion ultimo dia: %${porcentaje}</p>
                <p> Ultima actualizacion: ${fecha}</p>
            </div>
        </div>`;
        this.mostrarOcultarSpinner('block');

        setTimeout(()=>{
            //insertar el resultado
            document.querySelector('#resultado').innerHTML = templateHtml;
            this.mostrarOcultarSpinner('none');
        },3000);
        
    }

    //Mostrar Spinner de carga
    mostrarOcultarSpinner(vista){
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = vista;
    }
}