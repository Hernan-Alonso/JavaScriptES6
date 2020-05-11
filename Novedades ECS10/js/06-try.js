// try{
//     throw new Error('Algo salio mal');
// }catch (error){
//     console.log(error);
// }
//las librerias que usan try catch muchas veces tienen errores que son muy explicitos, por lo que el nuevo try catch, ahora no hace falta enviar un parametro de error,
// sino que pdoes customizar el mensaje
try{    
    throw new Error('Algo salio mal');
}catch{
    console.log('Algo salio muy mal, hay que revisar el codigo...');
}