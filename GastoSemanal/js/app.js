//Variables
const presupuestoUsuario = prompt('Cual es tu presupuesto Semanal?');
const formulario = document.getElementById('agregar-gasto');
let cantidadPresupuesto;

//Clases
//clase de presupuesto
class Presupuesto{
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
    }
    //Metodo para ir restandod el presupuesto actual
    presupuestoRestante(cantidad = 0){
        return this.restante -= Number(cantidad);
    }
}
//esta clase maneja todo lo referido al HTML
class Interfaz{
    insertarPresupuesto(cantidad){
        const presupuestoSpan = document.querySelector('span#total');
        const restanteSpan = document.querySelector('span#restante');
        //insertar al html
        presupuestoSpan.innerHTML = `${cantidad}`;
        restanteSpan.innerHTML = `${cantidad}`;
    }
    imprimirMensaje(mensaje,tipo){
        const div = document.createElement('div');
        div.classList.add('text-center', 'alert');
        if(tipo === 'error'){
            div.classList.add('alert-danger');
        }else{
            div.classList.add('alert-success');
        }
        div.appendChild(document.createTextNode(mensaje));
        //insertar en el DOM
        document.querySelector('.primario').insertBefore(div,formulario);
        //quitar el alert dsp de 3 segs
        setTimeout(function(){
            document.querySelector('.primario .alert').remove();
            formulario.reset();
        },3000);
    }
    //inserta los gastos a la lista
    agregarGastoListado(nombreGasto,cantidadGasto){
        const listadoGasto = document.querySelector('#gastos ul');
        //crear un li
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        //Insertar el gasto
        li.innerHTML = `
        ${nombreGasto}
        <span class='badge badge-primary badge-pill'>$${cantidadGasto}</span>
        `;
        //Insertar al HTML
        listadoGasto.appendChild(li);
    }
    //restar al Gasto Restante
    presupuestoRestante(cantidad){
        const restante = document.querySelector('span#restante');
        //leemos el presupuestoRestante
        const presupuestoRestanteUsuario = cantidadPresupuesto.presupuestoRestante(cantidad);
        //imprimir el restante en el div
        restante.innerHTML = `${presupuestoRestanteUsuario}`;
        this.comprobarPresupuesto();
    }
    //cambia de color el presupuesto restante
    comprobarPresupuesto(){
        const presupuestoTotal = cantidadPresupuesto.presupuesto;
        const presupuestoRestante = cantidadPresupuesto.restante;
        //comprobar el 25% del gasto
        if((presupuestoTotal / 4) > presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success','alert-warning');
            restante.classList.add('alert-danger');
        }else if((presupuestoTotal / 2)>presupuestoRestante){
            const restante = document.querySelector('.restante');
            restante.classList.remove('alert-success');
            restante.classList.add('alert-warning');
        }
    }
}

//Evnt Listeners
document.addEventListener('DOMContentLoaded', function(){
    if (presupuestoUsuario === null || presupuestoUsuario === ''){
        window.location.reload();
    }else{
        cantidadPresupuesto = new Presupuesto(presupuestoUsuario);
        //instanciar la clase de Interfaz
        const ui = new Interfaz();
        ui.insertarPresupuesto(cantidadPresupuesto.presupuesto);
    }
});
formulario.addEventListener('submit', function(e){
    e.preventDefault();
    //leer del formulario de gastos
    const nombreGasto = document.querySelector('#gasto').value;
    const cantidadGasto = document.querySelector('#cantidad').value;
    //Instanciar la interfaz
    const ui = new Interfaz();
    //comprobar que los campos no esten vacios
    if(nombreGasto === '' || cantidadGasto === ''){
        //dos parametros, mensaje y tipo
        ui.imprimirMensaje('Hubo un error','error');
    }else{
        ui.imprimirMensaje('Se agrego el gasto', 'success');
        ui.agregarGastoListado(nombreGasto,cantidadGasto);
        ui.presupuestoRestante(cantidadGasto);
    }
});