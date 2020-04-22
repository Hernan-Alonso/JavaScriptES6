//Variables
const listaTweets = document.querySelector('#lista-tweets');

//Event Listeners

eventListener();
function eventListener(){

    //agregar Tweet
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    //borrar tweets
    listaTweets.addEventListener('click', borrarTweet);
    //DOMContentLoaded
    document.addEventListener('DOMContentLoaded',cargarLocalStorage);
}

//Funciones

//Funcion agregar tweet
function agregarTweet(e){
    e.preventDefault();
    //leer contenido del tweet
    const tweet = document.getElementById('tweet').value;
    //crear boton eliminar
    const borrarBoton = document.createElement('a');
    borrarBoton.classList = 'borrar-tweet';
    borrarBoton.innerText = 'X';
    //crear elemento y agregar el contenido a la lista
    const li = document.createElement('li');
    li.innerText = tweet;
    li.appendChild(borrarBoton);
    listaTweets.appendChild(li);

    //agergar Tweet al LocalStorage
    agregarTweetLocalStorage(tweet);
}
//elimina tweet del DOM
function borrarTweet(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet'){
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);
    }
}

//cargar tweets de LS en la lista
function cargarLocalStorage(){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet){
        //crear boton eliminar
        const borrarBoton = document.createElement('a');
        borrarBoton.classList = 'borrar-tweet';
        borrarBoton.innerText = 'X';
        //crear elemento y agregar el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        li.appendChild(borrarBoton);
        listaTweets.appendChild(li);
    });
    
}

//agrega tweet al LS
function agregarTweetLocalStorage(tweet){
    let tweets;
    //leer si los tweets estan en LS
    tweets = obtenerTweetsLocalStorage();
    //agregar el nuevo tweet
    tweets.push(tweet);
    //convertir de string a arreglo JSON para LS
    localStorage.setItem('tweets', JSON.stringify(tweets));
    //agregar al LS
    //localStorage.setItem('tweets',tweet);
}
//comprobar que haya elementos en LS retorna arreglo-array
function obtenerTweetsLocalStorage(){
    let tweets;
    //revisar valores de LS
    if(localStorage.getItem('tweets') === null){
        tweets = [];
    }else{
        tweets = JSON.parse(localStorage.getItem('tweets'));
    }

    return tweets;
}
//eliminar tweet de LS
function borrarTweetLocalStorage(tweet){
    let tweets,tweetBorrar;
    //elimina la X del tweet
    tweetBorrar = tweet.substring(0,tweet.length - 1);

    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet, index){
        if(tweetBorrar === tweet){
            tweets.splice(index,1);
        }
    });
    localStorage.setItem('tweets', JSON.stringify(tweets));
}
