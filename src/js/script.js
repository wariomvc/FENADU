var scrollfuncion
document.addEventListener('DOMContentLoaded', function () {
    console.log("Cargó a pagina")
    eventListeners();

})
var scrollingState = false;

function eventListeners() {
    enlaces = document.querySelectorAll("a[href^='#']");
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', scroller);
    })
    boton_toartistas = document.querySelector('#boton_toartistas');
    boton_toeventos = document.querySelector('#boton_toeventos');
    boton_tocalendario = document.querySelector('#boton_tocalendario');

    botonLeft = document.querySelectorAll(".boton__left");
    botonRight = document.querySelectorAll(".boton__right");

    botonLeft.forEach(boton=>{
        let lista_cards = boton.parentNode.querySelector('.lista__cards');

        boton.addEventListener('mouseenter', (e) => {
            listaCardsScroll(e, lista_cards, -5);
        });
        boton.addEventListener('mouseleave', () => {
            clearInterval(scrollfuncion);
        });
    })
    botonRight.forEach(boton=>{
        let lista_cards = boton.parentNode.querySelector('.lista__cards');

        boton.addEventListener('mouseenter', (e) => {
            listaCardsScroll(e, lista_cards, 5);
        });
        boton.addEventListener('mouseleave', () => {
            clearInterval(scrollfuncion);
        });
    })

   /* botonLeft.addEventListener('mouseenter', (e) => {
        listaCardsScroll(e, -5);
    });
    botonLeft.addEventListener('mouseleave', () => {
        clearInterval(scrollfuncion);
    });*/
    botonRight.addEventListener('mouseenter', (e) => {
        listaCardsScroll(e, 5);
    });
    botonRight.addEventListener('mouseleave', () => {
        clearInterval(scrollfuncion);
    });
    //boton_toartistas.addEventListener('click', (e)=>moveTo(e,"artistas"));
    //boton_toeventos.addEventListener('click', (e)=>moveTo(e,"eventos"));
    //boton_tocalendario.addEventListener('click', (e)=>moveTo(e,"calendario"));


    //window.addEventListener('scroll', mousescroolling)

}

function scrolling(element, nScroll) {
    console.log(nScroll);
    element.scrollLeft += nScroll;
}

var scrollingOn = false;

function listaCardsScroll(e, listaCards, scrollSize) {
    //scrollingOn = true;
    //listaCards = document.querySelector('.lista__cards');

    scrollfuncion = setInterval(scrolling, 10, listaCards, scrollSize);


}

function scroller(e) {
    e.preventDefault();
    let idSeccionToScroll = e.target.attributes.href.value;
    let seccionToScroll = document.querySelector(idSeccionToScroll);
    seccionToScroll.scrollIntoView({
        behavior: "smooth",
        block: "start",
    })
}


function mousescroolling(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.originalEvent.detail);
    //console.log(artistasSeccion.getBoundingClientRect());
    artistasSeccion = document.querySelector('#calendario');

    if (e.originalEvent.detail > 1) {
        $('html, body').stop().animate({
            scrollTop: $('#calendario').offset().top,
        }, 1e3, "swing", () => {
            scrollingState = false;
        });

        scrollingState = true;


    }

}

function moveTo(e, seccion) {
    e.preventDefault();
    console.log(seccion);
    toseccion = document.querySelector("#" + seccion);
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