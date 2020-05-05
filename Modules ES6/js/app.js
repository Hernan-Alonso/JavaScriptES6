import {nombreCliente, ahorro, mostrarInfo, Cliente} from "./cliente.js";
import {nombreEmpresa, ahorro as ahorroEmpersa, categoria, Empresa} from "./empresa.js";
// const info = mostrarInfo();
// console.log(nombreCliente);
// console.log(ahorro);
// console.log(info);
let cliente = new Cliente('Jose', 5000);
console.log(cliente.mostrarInfo());

// console.log(mostrarInfoEmpresa(nombreEmpresa, ahorroEmpersa, categoria));

let empresa = new Empresa(nombreEmpresa, ahorroEmpersa, categoria);
let info = empresa.mostrarInfo();

console.log(info);