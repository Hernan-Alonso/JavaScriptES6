class Playlist{
    constructor(nombre){
        this.nombre = nombre;
    }
    play(){
        console.log(`Reproduciendo la playlist ${this.nombre}`);
    }
    eliminar(){ 
        console.log(`Eliminando la playlist ${this.nombre}`);
    }
}

const playList = new Playlist('Rock 90s');
const playList2 = new Playlist('Punk 90s');

// console.log(playList);
// console.log(playList2);
playList.play();
playList2.play();

playList.eliminar();