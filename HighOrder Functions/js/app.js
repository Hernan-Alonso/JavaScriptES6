const autos = [
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2012,
		precio: 30000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'Ford',
		modelo: 'Mustang',
		year: 2015,
		precio: 20000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A6', year: 2010, precio: 35000, puertas: 4, color: 'Negro', transmision: 'automatico' },
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2016,
		precio: 70000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2015,
		precio: 25000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro',
		year: 2018,
		precio: 60000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2017,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2012,
		precio: 25000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 45000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2019,
		precio: 90000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmision: 'manual' },
	{
		marca: 'Dodge',
		modelo: 'Challenger',
		year: 2015,
		precio: 35000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 3',
		year: 2018,
		precio: 50000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 5',
		year: 2017,
		precio: 80000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Mercedes Benz',
		modelo: 'Clase C',
		year: 2018,
		precio: 40000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{ marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmision: 'automatico' }
];
// console.table(autos);
// forma vieja seria el for


// forEach
// Recorre cada elemento en cada iteracion
// //para crear un arreglo con los resultados filtrados, debemos crear una variable de arreglo primero vacio y llenarlo en las iteraciones de la logica correcta en el foreach
// let resultado = [];
// autos.forEach(auto =>{
// 	// console.log(auto);
// 	//si queremos filtrar por marca
// 	if(auto.marca === 'BMW'){
// 		// console.log(auto);
// 		resultado.push(auto);
// 	}
// });
// console.log(resultado);

// map
//Map es parecido a forEach, pero a diferencia del forEach, map crea un arreglo de objeto por cada iteracion que genera, de esta manera podemos guardar una variable conteniendo el map.
//a diferencia del ForEach al generar un arreglo de objetos al recorrer. si se le da una condicion logica, va a devolver todos los resultados (undefined y que hayan dado resultado).
// para querer realizar este tipo de logica sera mejor usar .filter pero es importante conocer el MAP ya que tecnologias como React trabajan mucho con este tipo de High Order Functions
// let resultado = autos.map(auto => {
// 	// return auto.marca === 'BMW';
// });
// console.log(resultado);

// filter
// al igual que map, filter devuelve un arreglo del objeto, pero a diferencia del map, puede realizar la operacion logica para filtrar el resultado que quieras en la condicion
// let resultado = autos.filter(auto => {
// 	return auto.marca === 'BMW';
// });
// let resultado = autos.filter(auto => auto.color === 'Rojo');
// let resultado = autos.filter(auto => auto.year > 2015 && auto.year < 2018);
// console.log(resultado);

// find
// find a diferencia del filter, va a devovler el primer objeto que coincida con la condicion dada y lo va a retornar como un arreglo
// let resultado = autos.find(auto => auto.marca === 'BMW');
// console.log(resultado);

// reduce
// devuelve el total de la variable que se pide (ejemplo: queres saber cuanta plata devuelve vender todos los autos que estan registrados). devuelve un valor total
//toma dos valores, el valor previo (total) y el valor actual. (como un var total += a[i])
// let resultado = autos.reduce((total,auto) => total + auto.precio, 0);
// console.log(resultado);

// some
// devuelve un booleano, por lo que se utiliza para concoer si existe o no existe la condicion a evaluar. No se sabe cual es el objeto, solo conocemos que existe.
// let resultado = autos.some(auto => auto.marca === 'BMW');
// console.log(resultado);


