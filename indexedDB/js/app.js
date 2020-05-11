let DB;

//Selectores de la interfaz
const form = document.querySelector('form'),
      nombreMascota = document.querySelector('#mascota'),
      nombreCliente = document.querySelector('#cliente'),
      telefono = document.querySelector('#telefono'),
      fecha = document.querySelector('#fecha'),
      hora = document.querySelector('#hora'),
      sintomas = document.querySelector('#sintomas'),
      citas = document.querySelector('#citas'),
      headingAdministra = document.querySelector('#administra');
      
//Esperar DOM
document.addEventListener('DOMContentLoaded', () => {
    //crear DB
    let crearDB = window.indexedDB.open('citas', 1);

    //si hay error enviar a la consola
    crearDB.onerror = function (){
        console.log('Hubo un error');
    }
    //si todo esta bien muestra en consola y asigna valores
    crearDB.onsuccess = function (){
        // console.log('Todo listo');

        //Asignar al a DB
        DB = crearDB.result;
        // console.log(DB);

        mostrarCitas();
    }

    //Metodo que corre una unica vez y es ideal para crear el Schema de la DB
    crearDB.onupgradeneeded = function (e){
        //el evento es la misma base de datos
        let db = e.target.result;
        // console.log(db)
        //definir el objeto toma dos parametros el nombre de la DB y segundo las opciones
        //keyPath es el ID de la DB
        let objectStore = db.createObjectStore('citas',{keyPath: 'key', autoIncrement: true});

        //crear los Ids y campos de la DB createIndex: 3 parametros, nombre, keypath y opciones
        objectStore.createIndex('mascota','mascota',{unique:false});
        objectStore.createIndex('cliente','cliente',{unique:false});
        objectStore.createIndex('telefono','telefono',{unique:false});
        objectStore.createIndex('fecha','fecha',{unique:false});
        objectStore.createIndex('hora','hora',{unique:false});
        objectStore.createIndex('sintomas','sintomas',{unique:false});

        // console.log('Base de datos creada y lista');
    }

    form.addEventListener('submit', agregarDatos);

    function agregarDatos(e){
        e.preventDefault();
        // console.log('presionado');
        const nuevaCita = {
            mascota:    nombreMascota.value,
            cliente:    nombreCliente.value,
            telefono:   telefono.value,
            fecha:      fecha.value,
            hora:       hora.value,
            sintomas:   sintomas.value
        }

        // console.log(nuevaCita);

        //en IndexDB se usan transactions
        let transaccion = DB.transaction(['citas'],'readwrite');
        let objectStore = transaccion.objectStore('citas');
        // console.log(objectStore);

        let peticion = objectStore.add(nuevaCita);
        // console.log(peticion);
        peticion.onsuccess = () =>{
            form.reset();
        }
        transaccion.oncomplete = () =>{
            // console.log('cita agregada');
            mostrarCitas();
        }
        transaccion.onerror = () =>{
            console.log('Hubo un error');
        }
    }
    function limpiarCitas(){
        while(citas.firstChild){
            citas.removeChild(citas.firstChild);
        }
    }

    function mostrarCitas(){
        //limpiar las citas anteriores
        limpiarCitas();

        //creamos un Obs
        let objectStore =  DB.transaction('citas').objectStore('citas');

        //devuelve una peticion
        objectStore.openCursor().onsuccess = function (e) {
            //Cursor se va a ubicar en el registro indicado para acceder a los datos
            let cursor = e.target.result;

            // console.log(cursor);
            if(cursor){
                let citaHTML = document.createElement('li');
                citaHTML.setAttribute('data-cita-id', cursor.value.key);
                citaHTML.classList.add('list-group-item');
                citaHTML.innerHTML = 
                `
                    <p class="font-weight-bold"> Mascota: <span class="font-weight-normal">${cursor.value.mascota}</span></p>
                    <p class="font-weight-bold"> Cliente: <span class="font-weight-normal">${cursor.value.cliente}</span></p>
                    <p class="font-weight-bold"> Telefono: <span class="font-weight-normal">${cursor.value.telefono}</span></p>
                    <p class="font-weight-bold"> Fecha: <span class="font-weight-normal">${cursor.value.fecha}</span></p>
                    <p class="font-weight-bold"> Hora: <span class="font-weight-normal">${cursor.value.hora}</span></p>
                    <p class="font-weight-bold"> Sintomas: <span class="font-weight-normal">${cursor.value.sintomas}</span></p>
                `;
                // boton borrar
                const botonBorrar = document.createElement('button');
                botonBorrar.classList.add('borrar', 'btn', 'btn-danger');
                botonBorrar.innerHTML = `<span aria-hidden = true>X</span> Borrar`;
                botonBorrar.addEventListener('click', borrarCita);
                citaHTML.appendChild(botonBorrar);

                //apend en el padre
                citas.appendChild(citaHTML);
                //continua al siguiente Key disponible
                cursor.continue();
            }else{
                //Cuando no hay registros
                if(!citas.firstChild)
                {
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                }else{
                    headingAdministra.textContent = 'Administra tus citas';
                }
            }
        }
    }

    function borrarCita(e){
        let citaID = Number (e.target.parentElement.getAttribute('data-cita-id'));

        //en IndexDB se usan transactions
        let transaccion = DB.transaction(['citas'],'readwrite');
        let objectStore = transaccion.objectStore('citas');
        // console.log(objectStore);

        let peticion = objectStore.delete(citaID);

        transaccion.oncomplete = ()=>{
            e.target.parentElement.parentElement.removeChild(e.target.parentElement);
            console.log(`Se elimino la cita con ID: ${citaID}`);

            if(!citas.firstChild)
                {
                    headingAdministra.textContent = 'Agrega citas para comenzar';
                    let listado = document.createElement('p');
                    listado.classList.add('text-center');
                    listado.textContent = 'No hay registros';
                    citas.appendChild(listado);
                }else{
                    headingAdministra.textContent = 'Administra tus citas';
                }
        }
    }
})