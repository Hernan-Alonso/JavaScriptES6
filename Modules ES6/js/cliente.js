//Se pueden modularizar y exportar todo tipo de valores o funciones desde un archivo a otro, simplemente se debe agregar la palabra export
// a la variable o funcion que queremos exportar, y en el archivo que lo vamos a usar debemos usar import {nombre del modulo q importamos} from "de q archivo viene"
export const nombreCliente = 'Juan';
export let ahorro = 200;

export function mostrarInfo(){
    const valor = `Cliente: ${nombreCliente} - Ahorro: ${ahorro}`;

    return valor;
}

//Importar clases.
export class Cliente{
    constructor(nombre,ahorro){
        this.nombre = nombre;
        this.ahorro = ahorro;
    }
    mostrarInfo(){
        const valor = `Cliente: ${this.nombre} - Ahorro: ${this.ahorro}`;
    
        return valor;
    }
}