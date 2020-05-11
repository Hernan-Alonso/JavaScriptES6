const edades = [8,10,9, 11, [13,18, 20, [18,20,21]]];

// console.log(edades);

//Parecido al Map, el flat lo que hace es pasar de tener un array adetro de otro array y asi, es pasar todos al mismo nivel, 
// Si no sabes cuantos arrays adentro llega a tener, con agregar Infinity como arg al flat te va a tomar todo no importa si es 1 o n

console.log(edades.flat(Infinity));