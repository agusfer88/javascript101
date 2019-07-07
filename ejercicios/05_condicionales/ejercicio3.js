let posicionEnLaCarrera = 6;
let mensaje;

if(posicionEnLaCarrera == 1){
mensaje ='FELICITACIONES, SALISTE 1RO';
}
else if(posicionEnLaCarrera == 2){
mensaje ='Te falto poquito para ganar';
}
else if(posicionEnLaCarrera == 3){
mensaje ='Sos un orgullo para tu familia';
}
else if(posicionEnLaCarrera > 3){
mensaje ='Volvé a tu casa';
}
else {
mensaje ='No tires fruta';
}

console.log(mensaje);