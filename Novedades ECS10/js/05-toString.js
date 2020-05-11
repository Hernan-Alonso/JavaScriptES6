function sumar(a,b){
    //suma dos numeros
    return a+b
}

// console.log(sumar.toString());

function automovil(modelo,color){
    this.modelo = modelo;
    this.color = color;
}
automovil.prototype.toString = function autoString(){
    const datos = `Auto: ${this.modelo} - Color: ${this.color}`;
    return datos;
}
const auto = new automovil('Camaro', 'Rojo');
// console.log(auto);
console.log(auto.toString());