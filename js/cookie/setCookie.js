//set uma chave e valor quaisquer e n horas de login
function setCookie(key, name, horas) {
    //set dada de expiração
    var data = new Date();
    data.setTime(data.getTime() + 60000*60*horas);

    //cria cookie
    document.cookie=key+"="+name+"; expires="+data.toUTCString+"; path=/";

    //retorna se houve sucesso
    if(document.cookie.split("=") == key+","+name){
        return true;
    }else{
        return false
    }
}

