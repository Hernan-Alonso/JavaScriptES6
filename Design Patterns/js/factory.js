function constructorSitios(){
    this.crearElemento = function (texto, tipo){
        let html;

        if(tipo === 'input'){
            html = new InputHTML(texto);
        }else if (tipo === 'img'){
            html = new ImagenHTML(texto);
        }else if (tipo === 'h1'){
            html = new HeadingHTML(texto);
        }else if (tipo === 'p'){
            html = new ParrafoHTML(texto);
        }
        html.tipo = tipo;
        html.mostrar = function(){
            const elemento = document.createElement(this.tipo);

            if(this.tipo === 'input'){
                elemento.setAttribute('placeholder', this.texto);
            }else if(this.tipo === 'img'){
                elemento.setAttribute('src', this.texto);
                elemento.setAttribute('alt', this.texto);
            }else{
                elemento.appendChild(document.createTextNode(this.texto));
            }

            document.querySelector('#app').appendChild(elemento);
        }
        return html;
    }
}

const HeadingHTML = function (text){
    this.texto = text;
}
const InputHTML = function (text){
    this.texto = text;
}
const ImagenHTML = function (text){
    this.texto = text;
}
const ParrafoHTML = function (text){
    this.texto = text;
}
const sitioWeb = new constructorSitios();


const elementosWeb = [];

elementosWeb.push(sitioWeb.crearElemento('Bienvenidos', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('Bienvenidos al sitio web Factory', 'p'));
elementosWeb.push(sitioWeb.crearElemento('logo.svg', 'img'));
elementosWeb.push(sitioWeb.crearElemento('Conoce mas sobre nosotros', 'h1'));
elementosWeb.push(sitioWeb.crearElemento('Contacto', 'input'));
elementosWeb.push(sitioWeb.crearElemento('Tardaremos 48hs en procesar todas las consultas', 'p'));

// console.log(elementosWeb);

elementosWeb.forEach(ele =>{
    ele.mostrar();
});