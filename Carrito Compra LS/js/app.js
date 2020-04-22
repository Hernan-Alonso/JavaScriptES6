//Variables
const carrito = document.getElementById('carrito');
const cursos = document.getElementById('lista-cursos');
const listaCursos = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');
//Listeners
cargarEventListeners();
function cargarEventListeners(){
    //Dispara cuando se presiona agregar carrito
    cursos.addEventListener('click', comprarCurso);
    //eliminar curso de la lista del carrito
    carrito.addEventListener('click', eliminarCurso);
    //Vaciar carrito completo
    vaciarCarritoBtn.addEventListener('click',vaciarCarrito);
    //al cargar la pagina muestra data de LS
    document.addEventListener('DOMContentLoaded', leerLS);
}

//Funciones
//comprar Curso de la lista
function comprarCurso(e){
    e.preventDefault();
    //Delegation para agregar al carrito
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        //Enviamos el curso seleccionado para leer los datos
        leerDatosCurso(curso);
    }
}
//lee los datos del curso
function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoCurso);
}
//Muestra el curso seleccionado en el carrito
function insertarCarrito(curso){
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100/>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
    `;
    listaCursos.appendChild(row);
    guardarCursoLS(curso);
}

//borrar el curso del carrito en DOM 
function eliminarCurso(e){
    e.preventDefault();
    let curso;
    if(e.target.classList.contains('borrar-curso')){
        e.target.parentElement.parentElement.remove();
        curso = e.target.parentElement.parentElement;
        cursoId = curso.querySelector('a').getAttribute('data-id');

    }
    eliminarCursoLS(cursoId);
}
//vacia el carrito completo
function vaciarCarrito(){
    //forma recomendada
    //mientras ListaCursos tenga un hijo (El dato del curso) va a seguir borrando hasta que no quede nada.
    while(listaCursos.firstChild){
        listaCursos.removeChild(listaCursos.firstChild);
    }
    //vaciar localStorage
    vaciarLS();
    
    return false;
}
//almacena cursos del carrito al LS
function guardarCursoLS(curso){
    let cursos;
    //toma el valor de un arreglo en LS
    cursos = obtenerCursosLS();
    //el curso se agrega al arreglo
    cursos.push(curso);

    localStorage.setItem('cursos', JSON.stringify(cursos));
}
//comprueba que haya elementos en LS
function obtenerCursosLS(){
    let cursosLS;

    //comprobamos si hay algo en LS
    if(localStorage.getItem('cursos') === null){
        cursosLS = [];
    }else{
        cursosLS = JSON.parse(localStorage.getItem('cursos'));
    }
    return cursosLS;
}
//imprime los cursos de LS al DOM
function leerLS(){
    let cursosLS;
    //obtener data del LS
    cursosLS = obtenerCursosLS();
    //loopear adentro de los datos obtenidos para generar el contenido para el carrito
    cursosLS.forEach(function(curso){
        //construir template
        const row = document.createElement('tr');
        row.innerHTML = `
        <td>
            <img src="${curso.imagen}" width=100/>
        </td>
        <td>${curso.titulo}</td>
        <td>${curso.precio}</td>
        <td>
            <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
        </td>
        `;
        listaCursos.appendChild(row);
    });
}
//eliminar de LS
function eliminarCursoLS(curso){
    let cursosLS;
    //obtenemos arreglo de cursos
    cursosLS = obtenerCursosLS();
    //iteramos comparando ID de curso a borrar con los de LS
    cursosLS.forEach(function(cursoLS, index){
        if(cursoLS.id === curso){
            cursosLS.splice(index, 1);
        }
    });
    //agregamos el arreglo actual a Storage
    localStorage.setItem('cursos', JSON.stringify(cursosLS));

}
//elimina todos los cursos de LS
function vaciarLS(){
    localStorage.clear();
}