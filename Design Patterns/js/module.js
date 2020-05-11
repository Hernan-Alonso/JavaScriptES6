//EFI Functions
const comprarBoletos = (function(){

    //todas las variables adentro de la funcion se consideran privadas.
    let evento = 'Conferencia JS 2020';
    let precio = 200;
    const adquirirBoleto = () =>{
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    //para poder acceder a las funcioens o varaibles dentro, se debe realizar un return con los mismos. 
    return{
        mostrarEvento: function(){
            adquirirBoleto();
        }
    }
})();
// Desde afuera intentar acceder a una variable de adentro va a dar un error de que la variable no esta definida.
// console.log(evento);
// console.log(precio)

//desde afuera por notacion de punto se accede a la variable "evento" gracias a la funcion "mostrarEvento"
comprarBoletos.mostrarEvento();