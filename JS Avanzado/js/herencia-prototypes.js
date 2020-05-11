//herencia mediante prototypes
function Playlist(nombre){
    this.nombre = nombre;
}

Playlist.prototype.play = function (){
    console.log(`Reproduciendo la playlist ${this.nombre}`);
}
Playlist.prototype.eliminar = function (){
    console.log(`Se elimino la playlist ${this.nombre}`);
}


//Herencia
function Cancion(nombre, genero){
    Playlist.call(this, nombre);
    this.genero = genero;

}
//clonar el proto de playlist a cancion
Cancion.prototype = Object.create(Playlist.prototype);

const cancion = new Cancion('Nothing Else Matters', 'Heavy Metal');
const playlist = new Playlist('Rock 90s');
//No se puede acceder al proto de play de playlist, para eso hay q generar un clon de los proto de playlist a cancion
// cancion.play();

cancion.play();
playlist.play();
