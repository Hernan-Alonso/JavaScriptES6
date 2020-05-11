//observer = suscriptor

let observer = {
    obtenerOfertas: function(callback) {
        if(typeof callback === "function") {
            this.subscribers[this.subscribers.length] = callback;
        }
    },
    cancelarOfertas: function(callback) {
        for(let i = 0; i < this.subscribers.length; i++) {
            if(this.subscribers[i] === callback) {
                delete this.subscribers[i];
            }
        }
    },
 
    publicarOfertas: function(oferta) {
        for (let i = 0; i < this.subscribers.length; i++) {
            if (typeof this.subscribers[i] === 'function' ) {
                this.subscribers[i](oferta);
            }
        }
    },
    crear: function(objeto) {
        for(let i in this) {
            if(this.hasOwnProperty(i)) {
                objeto[i] = this[i];
                objeto.subscribers = [];
            }
        }
    }
}

//Vendedores
const udemy = {
    nuevoCurso:  function() {
        const curso = 'Un nuevo curso de JavaScript';
        this.publicarOfertas(curso);
    }
}
 
const facebook = {
    nuevoAnuncio: function() {
        const oferta = 'Compra un celular';
        this.publicarOfertas(oferta);
    }
}

//crear los publicadores

observer.crear(udemy);
observer.crear(facebook);

const juan = {
    compartir: oferta =>{
        console.log('Juan Dice: Me interesa la oferta de '+ oferta);
    }
};

const karen = {
    interesa: oferta =>{
        console.log('Karen Dice: Quiero esta oferta de '+ oferta);
    }
};


udemy.obtenerOfertas(juan.compartir)
udemy.obtenerOfertas(karen.interesa)
udemy.nuevoCurso();
udemy.cancelarOfertas(karen.interesa)
udemy.nuevoCurso();

facebook.obtenerOfertas(karen.interesa)
facebook.nuevoAnuncio();