//CREATE/UPDATE/DELETE

function setCookie(key, name, horas) {
    //set dada de expiração
    var data = new Date();
    data.setTime(data.getTime() + 60000*60*horas);

    //cria cookie
    document.cookie=key+"="+name+"; expires="+data.toUTCString+"; path=/";
}
//_____________________________________________________________________________________________________________________________________________________________
//READ
//uso interno do crud
function getCookie() {
    return document.cookie;
}
//retorna todos cookies numa string
function getCookieToString() {
    return document.cookie.split("=");
}
//____________________________________________________________________________________________________________________________________________________________
//DELETE
//deleta todos cookies
function delCookie(key) {
            var data = new Date();
            data.setTime(data.getTime());

            document.cookie = key + "=; expires" + data.toUTCString + "; path=/";   
}

//function delCookie2() {
  //          return "foda-se";
//}
//_____________________________________________________________________________________________________________________________________________________________