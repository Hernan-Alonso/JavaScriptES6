// Clases y prototypes

function Playlist(nombre){
    this.nombre = nombre;
}

Playlist.prototype.play = function (){
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}
Playlist.prototype.eliminar = function (){
    console.log(`Se elimino la playlist ${this.nombre}`);
}
const playList = new Playlist('Rock 90s');
const playList2 = new Playlist('Punk 90s');

// console.log(playList);
// console.log(playList2);
playList.play();
playList2.play();

playList.eliminar();