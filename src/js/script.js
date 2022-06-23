var scrollfuncion
document.addEventListener('DOMContentLoaded', function () {
    console.log("Cargó a pagina")
    eventListeners();

})
var scrollingState = false;

function eventListeners() {
    let enlaces = document.querySelectorAll("a[href^='#']");
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', scroller);
    })
    let boton_toartistas = document.querySelector('#boton_toartistas');
    let boton_toeventos = document.querySelector('#boton_toeventos');
    let boton_tocalendario = document.querySelector('#boton_tocalendario');

    let botonLeft = document.querySelectorAll(".boton__left");
    let botonRight = document.querySelectorAll(".boton__right");

    botonLeft.forEach(boton => {
        let lista_cards = boton.parentNode.querySelector('.lista__cards');

        boton.addEventListener('mouseenter', (e) => {
            listaCardsScroll(e, lista_cards, -5);
        });
        boton.addEventListener('mouseleave', () => {
            clearInterval(scrollfuncion);
        });
    })
    botonRight.forEach(boton => {
        let lista_cards = boton.parentNode.querySelector('.lista__cards');

        boton.addEventListener('mouseenter', (e) => {
            listaCardsScroll(e, lista_cards, 5);
        });
        boton.addEventListener('mouseleave', () => {
            clearInterval(scrollfuncion);
        });
    })

    let botoncalendario = document.querySelectorAll('.calendario__dia');
    botoncalendario.forEach(boton => {
        boton.addEventListener('click', cargarVideo)
    })
    //boton_toartistas.addEventListener('click', (e)=>moveTo(e,"artistas"));
    //boton_toeventos.addEventListener('click', (e)=>moveTo(e,"eventos"));
    //boton_tocalendario.addEventListener('click', (e)=>moveTo(e,"calendario"));


    //window.addEventListener('scroll', mousescroolling)

}

var playerYotube;
var palenquePlayer;

function cargarVideo(e) {
    if (playerYotube) {
        playerYotube.destroy();
    }
    if(palenquePlayer){
        palenquePlayer.destroy();
    }
    let velaria = document.querySelector('.velaria');
    let palenqueDOM = document.querySelector('.palenque');
    videoUrl.forEach(videoData => {
        if (videoData.dia == e.target.innerText) {

            velaria.classList.add('mostrar');
            playerYotube = new YT.Player('player', {
                videoId: videoData.velaria.url,
                height: '225',
                width: '400',
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                },
                playerVars: {'autoplay': 0, 'controls': 0}
            });
            if (videoData.palenque != null) {
                palenquePlayer = new YT.Player('player_palenque', {
                    videoId: videoData.palenque.url,
                    height: '225',
                    width: '400',
                    events: {
                        'onReady': onPlayerReady,
                        'onStateChange': onPlayerStateChange
                    },
                    playerVars: {'autoplay': 0, 'controls': 0}
                })
                palenqueDOM.classList.add('mostrar');
                let artista_palenque = palenqueDOM.querySelector('.evento__artista');
                let descripcion_palenque = palenqueDOM.querySelector('.evento__texto');
                artista_palenque.innerHTML = videoData.palenque.artista;
                descripcion_palenque.innerHTML = videoData.palenque.txt;

            }else{
                palenqueDOM.classList.remove('mostrar');
            }
            let artista_velaria = document.querySelector('.evento__artista');
            let descripcion_velaria = document.querySelector('.evento__texto');
            let fecha = document.querySelector('.evento__titulo');
            artista_velaria.innerHTML = videoData.velaria.artista;
            descripcion_velaria.innerHTML = videoData.velaria.txt;
            fecha.innerHTML = "Eventos para el " + videoData.dia + " de Julio";
            for (const videoDataKey in videoData.velaria.redes) {

                let enlaceRedElement = velaria.querySelector('.'+videoDataKey);

                enlaceRedElement.attributes['href'].value = videoData.velaria.redes[videoDataKey];
                enlaceRedElement.parentElement.classList.add('visible');
            }
            for (const videoDataKey in videoData.palenque.redes) {

                let enlaceRedElement = palenqueDOM.querySelector('.'+videoDataKey);

                enlaceRedElement.attributes['href'].value = videoData.velaria.redes[videoDataKey];
                enlaceRedElement.parentElement.classList.add('visible');
            }


        }
    })

}

/* function onYouTubeIframeAPIReady(urlvideo) {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    }); */
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