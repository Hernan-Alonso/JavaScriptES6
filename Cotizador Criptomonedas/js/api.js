class Api {
    constructor(apikey){
        this.apikey = apikey;
    }

    //obtener monedas
    async obtenerMonedas (){
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        //fetch a la api
        const urlObtenerMonedas = await fetch(url);

        //respuesta json
        const monedas = await urlObtenerMonedas.json();

        return{monedas}
    }


    async obtenerValores (moneda, criptomoneda){
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}&api_key=${this.apikey}`;

        //consultar en restApi
        const urlConvertir = await fetch(url);
        const resultado = await urlConvertir.json();
        return{resultado}
    }
}