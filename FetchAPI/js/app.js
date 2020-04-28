//Variables
const txtBtn = document.getElementById('txtBtn');
const jsonBtn = document.getElementById('jsonBtn');
const apiBtn = document.getElementById('apiBtn');
const resultado = document.getElementById('resultado');

//EventListeners
eventListener();
function eventListener(){

    txtBtn.addEventListener('click',cargarTxt);
    jsonBtn.addEventListener('click',cargarJson);
    apiBtn.addEventListener('click',cargarApi);
}

//Functions
function cargarTxt(){
    //busca el contenido de datos.txt
    fetch('datos.txt')
        .then(function(res){
            return res.text();
        })
        .then(function(data){
            resultado.innerHTML = data;
        })
        .catch(function(error){
            console.log(error);
        });
}
function cargarJson(){
    //busca los datos de empleados.json
    fetch('empleados.json')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let html = '';
        data.forEach(function(empleado){
            html += `
                <li>${empleado.nombre} ${empleado.puesto}</li>
            `;
        });
        resultado.innerHTML = html;

    })
    .catch(function(error){
        console.log(error);
    })
}
function cargarApi(){
    //busca los datos a una API
    fetch('https://picsum.photos/list')
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        console.log(data);
        let html = '';
        data.forEach(function(imagen){
            html += `
                <li><a href="${imagen.post_url}">Ver imagen</a> ${imagen.author} </li>
            `;
        });
        resultado.innerHTML = html;
    })
    .catch(function(error){
        console.log(error);
    })
}