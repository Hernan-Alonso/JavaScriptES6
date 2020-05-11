const Vendedor = function(nombre){
    this.nombre = nombre;
    this.sala = null;
}
const Comprador = function(nombre){
    this.nombre = nombre;
}


Vendedor.prototype = {
    oferta: function (articulo, precio){
        console.log(`Tenemos el siguiente articulo ${articulo}, iniciamos en ${precio}`);
    },
    vendido: function(comprador){
        console.log(`Vendido a ${comprador}`);
    }
}

Comprador.prototype = {
    oferta: function(mensaje, comprador){
        console.log(`${comprador.nombre}: ${mensaje}`);
    }
}

const Subasta = function(){
    let compradores = {};

    return{
        registrar: function(usuario){
            compradores[usuario.nombre] = usuario;
            usuario.sala = this;
            // console.log(compradores);
        }
    }
}

//instanciar los objetos
const juan = new Comprador('Juan');
const pablo = new Comprador('Pablo');
const pedro = new Comprador('Pedro');
const vendedor = new Vendedor('vendedor');

const subasta = new Subasta();
subasta.registrar(juan);
subasta.registrar(pablo);
subasta.registrar(pedro);

// console.log(juan);

vendedor.oferta('Mustang 96', 3000);
juan.oferta(3500, juan);
pablo.oferta(4000, pablo);
pedro.oferta(14000, pedro);
vendedor.vendido(pedro.nombre);