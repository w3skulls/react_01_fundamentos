export default class Error{

    constructor(){
        this.codigoError = null;
        this.mensajeError = null;
    }

    setError(codigoError){
        this.codigoError = codigoError;
        this.alert();
    }

    alert(){
        switch(this.codigoError){
            case 400: this.mensajeError = "Mensaje Buscador - No encontrado. Code:"+this.codigoError; break;
            default: break;
        }
        alert( "Error: " + this.mensajeError);
    }
}