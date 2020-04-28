//Async Await con un Fetch API
async function leerTodos (){
    //esperar la respuesta
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/todos');

    //Procede en cuanto la respuesta esta lista
    const datos = await respuesta.json();

    return datos;
}

leerTodos()
    .then( usuarios => console.log(usuarios));