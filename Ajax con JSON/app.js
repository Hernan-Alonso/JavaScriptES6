const empleadoBtn = document.getElementById('boton1');
const empleadosBtn = document.getElementById('boton2');
const empeladoDiv = document.getElementById('empleado');
const empleadosDiv = document.getElementById('empleados');

//eventListeners
eventListener();

function eventListener(){
    empleadoBtn.addEventListener('click', mostrarEmpleado);
    empleadosBtn.addEventListener('click', mostrarEmpleados);
}

//funciones
function mostrarEmpleado(){

    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleado.json', true);

    xhr.onload = function (){
        if(this.status === 200){
            const empleado = JSON.parse(this.responseText);
            const htmlTempleate=
            `
                <ul>
                    <li>ID: ${empleado.id}</li>
                    <li>Nombre: ${empleado.nombre}</li>
                    <li>Empresa: ${empleado.empresa}</li>
                    <li>Rol: ${empleado.trabajo}</li>
                </ul>
            `;
            empeladoDiv.innerHTML = htmlTempleate;
        }
    }

    xhr.send();
}

function mostrarEmpleados(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'empleados.json', true);

    xhr.onload = function (){
        if(this.status === 200){

            const empleados = JSON.parse(this.responseText);
            let htmlTempleate = '';
            empleados.forEach(empleado => {
                htmlTempleate +=
                `
                <ul>
                    <li>ID: ${empleado.id}</li>
                    <li>Nombre: ${empleado.nombre}</li>
                    <li>Empresa: ${empleado.empresa}</li>
                    <li>Rol: ${empleado.trabajo}</li>
                </ul>
                `;
                          
            });
            empleadosDiv.innerHTML = htmlTempleate;
        }
    }

    xhr.send();
}