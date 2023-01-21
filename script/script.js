var tela = document.getElementById('#body').clientWidth;
var img = document.getElementById('foto');
function changeImg(){
    if ( tela >= '700' ){
        img.scr = "images/Opa.jpg"
    }
}
