//Variables
const origenListado = document.getElementById('origen');
const generoListado = document.getElementById('genero');
const cantidadLetras = document.getElementById('numero');
const formulario = document.getElementById('generar-nombre');
//Classes

//eventListener
formulario.addEventListener('submit', cargarNombres);


//functions
function cargarNombres(e){
    e.preventDefault();

    //leer las variables
    const origenSeleccionado = origenListado.options[origenListado.selectedIndex].value;
    const generoSeleccionado = generoListado.options[generoListado.selectedIndex].value;
    const cantidadSeleccionada = cantidadLetras.value;

    //https://randomuser.me/api/?inc=results,name,nat,gender&results=5&nat=es&gender=male

    let url = '';
    url += 'https://randomuser.me//api/?inc=results,name,gender,nat&';
    //Si hay origen se agrega a la url
    if(origenSeleccionado !== ''){
        url+= `nat=${origenSeleccionado}&`;
    }
    if(generoSeleccionado !== ''){
        url+= `gender=${generoSeleccionado}&`;
    }
    if(cantidadSeleccionada !== ''){
        url+= `results=${cantidadSeleccionada}`;
    }
    
    //conectar por Fetch API
    fetch(url)
            .then(function(res){
                return res.json();
            })
            .then(function(data){
                const nombres = data.results;
                let htmlNombres = `<h2>Nombres generados</h2>`;
                htmlNombres += `<ul class="lista">`;
                nombres.forEach(function(nombre){
                    htmlNombres +=
                    `<li>${nombre.name.first}</li>`;
                });
                htmlNombres += `</ul>`;
                document.getElementById('resultado').innerHTML = htmlNombres;

            })
            .catch(function(error){
                console.log(error);
            });
}
