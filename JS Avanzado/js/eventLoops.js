// JS event Loops
// YTB CONFERENCE 
// https://www.youtube.com/watch?v=8aGhZQkoFbQ

console.log('Yo me muestro primero');
setTimeout(function(){
    console.log('Yo me muestro segundo');
},0);
console.log('Yo me muestro tercero');
setTimeout(function(){
    console.log('Yo me muestro cuarto');
},0);

new Promise(function(res){
    res('Yo soy un promise');
}).then(console.log);
console.log('Yo me muestro quinto');