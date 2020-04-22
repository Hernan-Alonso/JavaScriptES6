class Seguro{
    constructor(marca,anio,tipo){
        this.marca = marca;
        this.anio = anio;
        this.tipo = tipo;
    }
    cotizarSeguro(){
        /*
            americano 1.15 , asiatico 1.05, europeo 1.35
        */
        let cantidad;
        const base = 2000;
        switch(this.marca){
            case '1':
                cantidad = base*1.15;
                break;
            case '2':
                cantidad = base*1.05;
                break;
            case '3':
                cantidad = base*1.35;
                break;        
        }
        const diferencia = new Date().getFullYear() - this.anio;
        /*  Cada anio que se aleja del anio actual, se resta un 3% mas barato
        */
        cantidad -= ((diferencia*3)*cantidad)/100;
        /*  Si el seguro que eligio es basico se multipica por 30%mas
            Si el seguro que eligio es completo se multiplica por 50% mas
        */
       if(this.tipo === 'basico'){
           cantidad *= 1.30;
       }else{
           cantidad *= 1.50;
       }
        return cantidad;
    }
    
}
//todo lo que se muestra
class Interfaz{
    mostrarError(mnsj, tipo){
        const div = document.createElement('div');
    
        if(tipo === 'error'){
            div.classList.add('mensaje','error');
        }else{
            div.classList.add('mensaje','correcto');
        }
        div.innerHTML = `${mnsj}`;
        formulario.insertBefore(div,document.querySelector('.form-group'));
        setTimeout(function(){
                document.querySelector('.mensaje').remove();
        },3000);
    
    }
    mostrarResultado(seguro,total){
        const resultado = document.getElementById('resultado');
        let marca;
        switch(seguro.marca){
            case '1':
                marca = 'Americano';
                break;
            case '2':
                marca = 'Asiatico';
                break;
            case '3':
                marca = 'Europeo';
                break;        
        }
        //crear un Div
        const div = document.createElement('div');
        div.innerHTML = `
            <p class='header'>Tu Resumen:</p>
            <p>Marca: ${marca}</p>
            <p>Anio: ${seguro.anio}</p>
            <p>Tipo: ${seguro.tipo}</p>
            <p>Total: $${total}</p>
        `;
        const spiner = document.querySelector('#cargando img');
        spiner.style.display = 'block';
        setTimeout(function(){
            spiner.style.display = 'none';
            resultado.appendChild(div);
        },3000);
        
    }
    
}
//Variables
const formulario = document.getElementById('cotizar-seguro');
const max = new Date().getFullYear(),
      min = max - 20,
selectAnios = document.getElementById('anio');
const marca = document.getElementById('marca'),
      anio  = document.getElementById('anio');
    
//Event LIstener
eventListener();

function eventListener (){
    formulario.addEventListener('submit',cotizarSeguro);
}

//funciones
function cotizarSeguro(e){
    e.preventDefault();
    //obtener el id del valor del tipo de marca (Americano, aisatico o europeo)
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    //leer el anio seleccionado del select
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    //lee el valor del radio button
    const tipo  = document.querySelector('input[name="tipo"]:checked').value;

    //crear instancia de interfaz
    const interfaz = new Interfaz();

    //revisar que los campos no esten vacios
    if(marcaSeleccionada === '' || anioSeleccionado === '' || tipo === ''){
        //Interfaz imprimiendo un error
        interfaz.mostrarError('Faltan Datos, revisar el formulario y revisa de nuevo.', 'error');
    }else{
        //Limpiar resultados anteriores si los hay
        const resultados = document.querySelector('#resultado div');
        if(resultados != null){
            resultados.remove();
        }
        //instanciar Seguro y mostrar Interfaz
        const seguro = new Seguro(marcaSeleccionada, anioSeleccionado, tipo);
        //cotizar el seguro
        const cantidad = seguro.cotizarSeguro();

        //mostrar el resultado
        interfaz.mostrarResultado(seguro,cantidad);
    }

}

//Creo el Select para los anios, no mas de 20 anios de diferencia entre anio actual y ultimo anio a poder cotizar

for (let i = max; i >= min; i--){
    let option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnios.appendChild(option);
}