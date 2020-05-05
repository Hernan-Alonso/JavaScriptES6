class Api{
    async obtenerDatos(){
        const datos = await fetch('https://soluciones.aeroterra.com/server/rest/services/OD_Economia/MINEM_EstacionesDeServicio/FeatureServer/0/query?where=1%3D1&outFields=*&outSR=4326&f=json');

        const respuesta = await datos.json();

        return{
            respuesta
        }
    }
}