document.getElementById('cargar').addEventListener('click',cargarDatos);

function cargarDatos(){
    //crear el objeto XMLHttpRequest
    const xhr = new XMLHttpRequest();

    //Abrir conexion
    xhr.open('GET','datos.txt',true);

    //Old format
    xhr.onreadystatechange = function(){
        //ready status  0- no iniciado 1- conexion establecida 2-recibido 3-procesando 4-respuesta lista
        if(this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);
        }
    }

    //una vez que carga.
    /*
    xhr.onload = function(){
        //check for status 200
        if(this.status === 200){
          document.getElementById('listado').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }*/

    //Enviar el request
    xhr.send();
}
