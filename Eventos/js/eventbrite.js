class Api {
    constructor(){
        this.token_auth = 'Q7dk8htubeGUUNlRe7277fewUvLyJXZu';
        this.ordenar = 'date';
    }

    async obtenerEventos (keyword, categoria){
        const respuestaEvento = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${this.token_auth}&classificationId=${categoria}&keyword=${keyword}`);
        
        const eventos = await respuestaEvento.json();

        return{
            eventos
        }
    }

    //obtener categorias
    async obtenerCategorias(){
        //Consultar las categorias a la api
        //const respuestaCategorias = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=Q7dk8htubeGUUNlRe7277fewUvLyJXZu`);
        //https://app.ticketmaster.com/discovery/v2/classifications/?apikey=Q7dk8htubeGUUNlRe7277fewUvLyJXZu

        const respuestaCategorias = await fetch(`https://app.ticketmaster.com/discovery/v2/classifications/?apikey=${this.token_auth}`);

        const cates = await respuestaCategorias.json();
        const categorias = cates._embedded.classifications;        
        return{
            categorias
        }
    }
}