//async function

async function obtenerClientes(){
    //crear promise
    const clientes = new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve(`Clientes descargados...`);

        },2000);
    });

    //error o no...
    const error = true;
    if(!error){
        const respuesta = await clientes;
        return respuesta;
    }else{
        await Promise.reject('hubo un error');
    }
}

obtenerClientes()
    .then(res => console.log(res))
    .catch(error => console.log(error));