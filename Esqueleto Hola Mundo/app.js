//object literal   
const cliente = {
    nombre: 'Juan',
    saldo: 1200,
    tipoCliente : function(){
        let tipo;
        if(this.saldo > 1000){
            tipo = 'Black';
        }else if (this.saldo > 500){
            tipo = 'Gold';
        }else{
            tipo = 'International';
        }
        return tipo;
    }
}


//Metodo alternativo
/*
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//crear prototipos para que unicamente esten presentes para la clase que se necesita, ejemplo, Cliente.
Cliente.prototype.tipoCliente = function (){
    if(this.saldo > 1000){
        tipo = 'Black';
    }else if (this.saldo > 500){
        tipo = 'Gold';
    }else{
        tipo = 'International';
    }
    return tipo;
}
//otro prototype
Cliente.prototype.rangoCliente = function (){
    return `Nombre: ${this.nombre}, tu saldo es de:$ ${this.saldo}, y tu rango es: ${this.tipoCliente()}`;
}
//prototype para retirar saldo
Cliente.prototype.retirarSaldo = function(cantidad){
    return this.saldo -= cantidad;
}
const persona1 = new Cliente('Pedro', 20000);
const persona2 = new Cliente('Analia', 200);
const persona3 = new Cliente('Matias', 700);

persona3.retirarSaldo(150);
console.log(persona1.rangoCliente());
console.log(persona2.rangoCliente());
console.log(persona3.rangoCliente());
*/
//Heredacion de Prototipos

//Metodo alternativo
/*
function Cliente(nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//prototype de Rango.
Cliente.prototype.rangoCliente = function (){
    return `Nombre: ${this.nombre}, tu saldo es de:$ ${this.saldo}`;
}

function Empresa(nombre, saldo, telefono, tipo){
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
    this.tipo = tipo;
}
//heredar prototype
Empresa.prototype = Object.create(Cliente.prototype);

const cliente1 = new Cliente('Pedro', 1000);
const empresa1 = new Empresa('Udemy', 1000000, 132421421, 'Educacion');

console.log(cliente1);
console.log(empresa1.rangoCliente());
/*
//Object create...
const Cliente = {
    imprimirSaldo: function(){
        return `hola, ${this.nombre} tu saldo es de ${this.saldo}`
    },
    returarSaldo: function(cantidad){
        return this.saldo -= cantidad;
    }
}
const mary = Object.create(Cliente);
mary.nombre = 'Mary';
mary.saldo = 10000;

console.log(mary.imprimirSaldo());
/*

///Clases en ES6
class Cliente{
    constructor(nombre, apellido, saldo){
        this.nombre = nombre;
        this.apellido = apellido;
        this.saldo = saldo;
    }
    imprimirSaldo (){
        return `hola, ${this.nombre} tu saldo es de ${this.saldo}`
    }
    tipoCliente (){
        let tipo;
        if(this.saldo > 10000){
            tipo = 'Gold';
        }else if (this.saldo > 5000){
            tipo = 'Platinum';
        }else{
            tipo = 'Normal';
        }
        return tipo;
    }
    retirarSaldo(cantidad){
        return this.saldo-=cantidad;
    }
    //static functions no necesita instanciar a la clase (new Class)
    static bienvenido (){
        return `Bienvenido al Cajero`;
    }
}

const maria = new Cliente('maria', 'perez', 10000);
maria.retirarSaldo(5000);
console.log(maria.imprimirSaldo());
console.log(Cliente.bienvenido());
*/
//Herencia en Clases
class Cliente{
    constructor(nombre, saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    imprimirSaldo (){
        return `hola, ${this.nombre} tu saldo es de ${this.saldo}`
    }
    //static functions no necesita instanciar a la clase (new Class)
    static bienvenido (){
        return `Bienvenido al Cajero`;
    }
}
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, tipo){
        //Va hacia el constructor padre a buscar los datos.
        super(nombre, saldo);
        //no existen en el constructor padre
        this.telefono = telefono;
        this.tipo = tipo;

    }
    //modificar una funcion heredada del padre
    static bienvenido (){
        return `Bienvenido al cajero para empresas`;
    }
}

const maria = new Cliente('maria', 10000);
const empresa = new Empresa('Empresa1', 100000, 14242141, 'Construccion');
console.log(maria.imprimirSaldo());
console.log(empresa.imprimirSaldo());

console.log(Cliente.bienvenido());
console.log(Empresa.bienvenido());