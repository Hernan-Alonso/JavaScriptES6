class Formulario{
    constructor(){
        this.campos = [];
    }
    agregarCampo(tipo,texto){
        let campos = this.campos;

        let campo;

        switch(tipo){
            case "text":
                campo = new InputText(texto);
            break;
            case "email":
                campo = new InputEmail(texto);
            break;
            case "button":
                campo = new InputButton(texto);
            break;
            default:
                throw new Error('Tipo no valido' + tipo);
        }
        campos.push(campo);
    }

    obtenerFormulario(){

        let form = document.createElement('form');
        let campos = this.campos.length,
            campo;

        for(let i = 0; i < campos; i++){
            campo = this.campos[i];
            form.appendChild(campo.crearElemento());
            let br = document.createElement('br');
            form.appendChild(br);
        }
        return form;
    }
}



class Inputs{
    constructor(texto){
        this.texto = texto;
    }
}

class InputText extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type','text');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

class InputEmail extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('input');
        inputText.setAttribute('type','email');
        inputText.setAttribute('placeholder', this.texto);
        return inputText;
    }
}

class InputButton extends Inputs{
    constructor(texto){
        super(texto);
    }
    crearElemento(){
        const inputText = document.createElement('button');
        inputText.setAttribute('type','submit');
        inputText.textContent = this.texto;
        return inputText;
    }
}

//instanciar el form

const formulario = new Formulario();

formulario.agregarCampo('text', 'Nombre');
formulario.agregarCampo('text', 'Apellido');
formulario.agregarCampo('text', 'Direccion');
formulario.agregarCampo('email', 'Correo eletronico');
formulario.agregarCampo('email', 'Enviar');

// console.log(formulario);

//renderizar el form
document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector('#app').appendChild(formulario.obtenerFormulario());
})

