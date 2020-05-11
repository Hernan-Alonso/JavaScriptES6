// function persona(nombre){
//     console.log(`Hola soy ${nombre}`);
// }

// persona('Juan');

//This con implicit Binding
const usuario = {
    nombre: 'Hernan',
    edad: 26,
    presentacion (){
        //de esta manera no se puede ingresar a la variable
        // console.log(`Mi nombre es ${nombre} y tengo ${edad}`);
        //se tenia q ingresar con this con lo que se llama implicit binding
        console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
    },
    mascota: {
        nombre: 'Hook',
        edad: 4,
        presentacion (){
            console.log(`Mi nombre es ${this.nombre} y tengo ${this.edad}`);
        }
    }
}
//Solo vas a acceder a la presentacion de usuario
usuario.presentacion();
//para acceder a la segunda presentacion hay q darle notacion de punto
usuario.mascota.presentacion();