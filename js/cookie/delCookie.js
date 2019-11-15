//import * as readCookie from 'getCookie.js';
//const getCookie = require('./getCookie.js');

function delCookie() {
    var cookieToString = getCookie.getCookieToString();
   //var cookieToString = ""; 

    if (cookieToString == null || cookieToString == "") {
        return "not cookie";   
        //document.cookie = name + "=" + "; expires=Thu, 01-Jan-70 00:00:01 GMT";
    }else{
        return "fail";
    }
}

//function delCookie2() {
  //          return "foda-se";
//}

