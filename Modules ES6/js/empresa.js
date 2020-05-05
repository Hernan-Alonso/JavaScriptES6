import {Cliente} from "./cliente.js";

export const nombreEmpresa = 'Pipe';
export const ahorro = 10000;
export const categoria = 'Aprendizaje';

// export function mostrarInfo(nombre,ahorro, categoria){
//     return `Cliente: ${nombre}, Ahorro: ${ahorro}, Categoria: ${categoria}`;
// }

export class Empresa extends Cliente{
    constructor(nombre,ahorro,categoria){
        super(nombre,ahorro);
        this.categoria = categoria;
    }

    mostrarInfo(){
        return `Cliente: ${this.nombre}, Ahorro: ${this.ahorro}, Categoria: ${this.categoria}`;
    }
}