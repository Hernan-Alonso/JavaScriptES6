//this con Explicit Binding

function persona(el1, el2){
    console.log(`Hola soy ${this.nombre} y me gusta el ${el1} y ${el2}`);
}
const informacion = {
    nombre: 'Hernan',
    trabajo: 'FrontEnd'
}
const generosMusicales = ['Heavy Metal', 'Rock'];
//No va a funcionar si envias de esta manera la data con implicit binding
// persona(informacion);

//Se llama con explicit binding al Call
// para acceder a informacion de arreglos, necesitas explicitar q posicion estas accediendo
persona.call(informacion, generosMusicales[0], generosMusicales[1]);

//explicit binding con apply (si toma arreglos)

persona.apply(informacion, generosMusicales);

//explicit binding con bind
const nuevaFn = persona.bind(informacion, generosMusicales[0], generosMusicales[1]);
nuevaFn();