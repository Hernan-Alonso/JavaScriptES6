class Interfaz{
    constructor(){
        this.api = new Api();

        this.markers = new L.layerGroup();

        this.mapa = this.iniciarMapa();
    }

    iniciarMapa(){
        const map = L.map('map').setView([-34.603722, -58.381592], 6);
        const enlaceMapa = '<a href="http://openstreetmap.org">Open Street Map</a>';



        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; '+enlaceMapa+' contributors'
        }).addTo(map);

        // L.marker([-34.603722, -58.381592]).addTo(map)
        //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //     .openPopup();
            return map; 
    }

    mostrarEstablecimientos(){
        this.api.obtenerDatos()
            .then(datos=>{
                // console.log(datos.respuesta.features);
                const resultado = datos.respuesta.features;
                // console.log(resultado);
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos){
        // console.log(datos);
        this.markers.clearLayers();
        datos.forEach(dato =>{
            const {geometry:{x,y}} = dato;
            const {attributes:{BANDERA,DOMICILIO,RAZON_SOCIAL}} = dato;
            //crear PopUp
            const opcionesPopUp = L.popup()
                .setContent(
                    `
                        <p><b>Nombre:${RAZON_SOCIAL}</b></p>
                        <p>Calle:${DOMICILIO}</p>
                        <p>Estacion: ${BANDERA !== null ? BANDERA:'No disponible'}</p>

                    `
                );
            
            const marker = new L.marker([
                parseFloat(y),
                parseFloat(x)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);

        });
        this.markers.addTo(this.mapa);
    }

    //obtener sugerencias
    obtenerSugerencias(keyword){
        this.api.obtenerDatos()
            .then(datos=>{
                const resultados = datos.respuesta.features;
                this.filtrarSugerencias(resultados,keyword);
            })
    }

    filtrarSugerencias(resultado, busqueda){
        const filtro = resultado.filter(filtro => filtro.attributes.RAZON_SOCIAL.toUpperCase().indexOf(busqueda.toUpperCase()) !== -1);
        this.mostrarPines(filtro);
    }
}