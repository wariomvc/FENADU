
document.addEventListener('DOMContentLoaded', function () {
    console.log("Cargó a pagina")
    eventListeners();

})
var scrollingState = false;

function eventListeners() {
    boton_toartistas = document.querySelector('#boton_toartistas');
    boton_toeventos = document.querySelector('#boton_toeventos');
    boton_tocalendario = document.querySelector('#boton_tocalendario');

    boton_toartistas.addEventListener('click', (e)=>moveTo(e,"artistas"));
    boton_toeventos.addEventListener('click', (e)=>moveTo(e,"eventos"));
    boton_tocalendario.addEventListener('click', (e)=>moveTo(e,"calendario"));
       

    //window.addEventListener('scroll', mousescroolling)

};



function mousescroolling(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.originalEvent.detail);
    //console.log(artistasSeccion.getBoundingClientRect());
    artistasSeccion = document.querySelector('#calendario');
    
    if (e.originalEvent.detail > 1 ) {
         $('html, body').stop().animate({
            scrollTop: $('#calendario').offset().top,
        },1e3,"swing",()=>{
            scrollingState = false;
        });
        
        scrollingState = true;
        
        
    }

}

function moveTo(e,seccion) {
    e.preventDefault();
    console.log(seccion);
    toseccion = document.querySelector("#"+seccion);
    console.log(toseccion);
    scroll({
        top: toseccion.offsetTop,
        behavior: "smooth"
    })
    /* artistasSeccion.scrollIntoView({
        behavior: "smooth",
        block: "start"
    }) */
}