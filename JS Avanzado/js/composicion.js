// COmposicion

const obtenerNombre = (info) =>({
    mostrarNombre(){
        console.log(`Nombre: ${info.nombre}`);
    }
});
const guardarEmail = info =>({
    email(email){
        console.log(`Guardando email en ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = (info) =>({
    mostrarEmail(){
        console.log(`Email: ${info.email}`);
    }
});

const obtenerPuesto = (info) =>({
    mostrarPuesto(){
        console.log(`Puesto: ${info.puesto}`);
    }
});


const obtenerEmpresa = info =>({
    mostrarEmpresa(){
        console.log(`Empresa: ${this.empresa}`);
    }
});

function Cliente(nombre, email, empresa){
    let info = {
        nombre,
        email,
        empresa
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerEmpresa(info)
    )
}
function Empleado(nombre, email, puesto){
    let info = {
        nombre,
        email,
        puesto
    }
    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerPuesto(info)
    )
}

const cliente = Cliente('Hernan', null, 'Udemy');
cliente.mostrarNombre();
cliente.email('cliente@gmail.com');
cliente.mostrarEmail();
cliente.mostrarEmpresa();

const empleado =  Empleado('Juan', null, 'Profesor');
empleado.mostrarNombre();
empleado.email('empleado@empleado.com');
empleado.mostrarEmail();
empleado.mostrarPuesto();