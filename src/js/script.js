var scrollfuncion
document.addEventListener('DOMContentLoaded', function () {
    console.log("Cargó a pagina")
    eventListeners();
    generarEventosBotones();

})
let enlace_twitter = ' <div class="enlace__redes visible">\n' +
    '                                    <a href="urltwitter" class="twitter">\n' +
    '                                        <svg xmlns="http://www.w3.org/2000/svg"\n' +
    '                                             class="icon icon-tabler icon-tabler-brand-twitter" width="44" height="44"\n' +
    '                                             viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
    '                                             stroke-linecap="round" stroke-linejoin="round">\n' +
    '                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
    '                                            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"/>\n' +
    '                                        </svg>\n' +
    '                                    </a>\n' +
    '                                </div>';
let enlace_facebook = '<div class="enlace__redes visible">\n' +
    '                                    <a href="urlfacebook" class="facebook">\n' +
    '                                        <svg xmlns="http://www.w3.org/2000/svg"\n' +
    '                                             class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44"\n' +
    '                                             viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
    '                                             stroke-linecap="round" stroke-linejoin="round">\n' +
    '                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
    '                                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"/>\n' +
    '                                        </svg>\n' +
    '                                    </a>\n' +
    '                                </div>';
let enlace_instagram = '<div class="enlace__redes">\n' +
    '                                    <a href="urlinstagram" class="instagram">\n' +
    '                                        <svg xmlns="http://www.w3.org/2000/svg"\n' +
    '                                             class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44"\n' +
    '                                             viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
    '                                             stroke-linecap="round" stroke-linejoin="round">\n' +
    '                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
    '                                            <rect x="4" y="4" width="16" height="16" rx="4"/>\n' +
    '                                            <circle cx="12" cy="12" r="3"/>\n' +
    '                                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"/>\n' +
    '                                        </svg>\n' +
    '                                    </a>\n' +
    '                                </div>';
let enlace_yotube = '<div class="enlace__redes">\n' +
    '                                    <a href="urlyoutube" class="youtube">\n' +
    '                                        <svg xmlns="http://www.w3.org/2000/svg"\n' +
    '                                             class="icon icon-tabler icon-tabler-brand-youtube" width="44" height="44"\n' +
    '                                             viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none"\n' +
    '                                             stroke-linecap="round" stroke-linejoin="round">\n' +
    '                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n' +
    '                                            <rect x="3" y="5" width="18" height="14" rx="4"/>\n' +
    '                                            <path d="M10 9l5 3l-5 3z"/>\n' +
    '                                        </svg>\n' +
    '                                    </a>\n' +
    '                                </div>';
var scrollingState = false;

var carta_palenque_Final ='';
var carta_velaria_Final ='';

function generarCards() {
    let templates_enlaces = {
        twitter: enlace_twitter,
        facebook: enlace_facebook,
        instagram: enlace_instagram,
        youtube: enlace_yotube
    }
    let cartaFinal = '  ';
    let template_card = '';
    let template_card_palenque = ''
    videoUrl.forEach(info => {
        let enlaces_redes = '';
        let enlaces_redes_palenque = '';
        for (const redKey in info.velaria.redes) {
            enlaces_redes += templates_enlaces[redKey].replace('url' + redKey, info.velaria.redes[redKey]);
        }
        template_card_palenque = '';
        if (info.palenque) {
            for (const redKey in info.palenque.redes) {
                enlaces_redes_palenque += templates_enlaces[redKey].replace('url' + redKey, info.palenque.redes[redKey]);
            }
            template_card_palenque =  '<div class="card">\n' +
                '                <div class="card__imagen">\n' +
                '                    <img src="./build/img/' + info.palenque.img + '.jpg" alt="" >\n' +
                '                </div>\n' +
                '                <div class="card__titulo">\n' +
                '                    <h3>' + info.palenque.artista + '</h3>\n' +
                '                </div>\n' +
                '                <div class="evento__descripcion">\n' +
                '                 <div class="evento__enlaces">TEMPLATEENLACES</div>   ' +
                '                </div>\n' +
                '                <div class="card__footer">\n' +
                '\n' +
                '                        <p class="card__fecha">' + info.dia + ' de Julio</p>\n' +
                '\n' +
                '                    <a url="'+info.palenque.url+'"  class="boton vervideo">Ver Video</a>\n' +
                '                </div>\n' +
                '            </div>';
        }

        template_card = '<div class="card">\n' +
            '                <div class="card__imagen">\n' +
            '                    <img src="./build/img/' + info.velaria.img + '.jpg" alt="" >\n' +
            '                </div>\n' +
            '                <div class="card__titulo">\n' +
            '                    <h3>' + info.velaria.artista + '</h3>\n' +
            '                </div>\n' +
            '                <div class="evento__descripcion">\n' +
            '                 <div class="evento__enlaces">TEMPLATEENLACES</div>   ' +
            '                </div>\n' +
            '                <div class="card__footer">\n' +
            '\n' +
            '                        <p class="card__fecha">' + info.dia + ' de Julio</p>\n' +
            '\n' +
            '                    <a url="'+info.velaria.url+'" class="boton vervideo">Ver Video</a>\n' +
            '                </div>\n' +
            '            </div>';
        carta_velaria_Final += template_card.replace('TEMPLATEENLACES', enlaces_redes);
        carta_palenque_Final += template_card_palenque.replace('TEMPLATEENLACES', enlaces_redes_palenque);

    })

}

function generarEventosBotones(){
    allbotones = document.querySelectorAll('.vervideo');
    allbotones.forEach(boton=>{
        url = boton.attributes.url;
        boton.addEventListener('click', (e)=>{
            mostrarVideo(e,url.value);
        })
    })
}

let playerVideo;

function mostrarVideo(e,url) {
    console.log(e.target.attributes.url.value);
    const video = document.createElement('DIV');
    video.id = "videoplayer";
    const overlay = document.createElement('DIV');
    overlay.appendChild(video);
    overlay.classList.add('overlay');
    overlay.addEventListener('click',()=>{
        playerVideo.destroy();
        overlay.remove();
        const body = document.querySelector('body');
        body.classList.remove('fijar-body');
    })

    const botonCerrar = document.createElement('P');
    botonCerrar.textContent='X';
    botonCerrar.classList.add('btn-cerrar')
    overlay.appendChild(botonCerrar);

    const body = document.querySelector('body');
    body.classList.add('fijar-body')
    body.appendChild(overlay);
    
    playerVideo = new YT.Player('videoplayer', {
        videoId: e.target.attributes.url.value,
        height: '337',
        width: '600',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        },
        playerVars: {'autoplay': 0, 'controls': 0}
    });

}

function eventListeners() {
    let velaria = document.querySelector('.rosa .velaria');
    let palenque = document.querySelector('.azul .palenque');
    generarCards();
    velaria.innerHTML = carta_velaria_Final;
    palenque.innerHTML = carta_palenque_Final;
    //velaria.innerHTML = cartaHTML;

    velaria.addEventListener('wheel', (e) => {
        delta = e.deltaX*10;
        if(delta>0){
            delta = Math.min(25,delta);
        }else if(delta<0)
            delta = Math.max(-25,delta);
        velaria.scrollLeft  = velaria.scrollLeft+delta;
    });
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
            listaCardsScroll(e, lista_cards, -10);
        });
        /* boton.addEventListener('touchstart', (e) => {
            listaCardsScroll(e, lista_cards, -10);
        }); */
        boton.addEventListener('mouseleave', () => {
            clearInterval(scrollfuncion);
        });
        /* boton.addEventListener('touchend', () => {
            clearInterval(scrollfuncion);
        }); */
        
    })
    botonRight.forEach(boton => {
        let lista_cards = boton.parentNode.querySelector('.lista__cards');

        boton.addEventListener('pointerenter', (e) => {
            listaCardsScroll(e, lista_cards, 10);
        });
        
        /* boton.addEventListener('touchstart', (e) => {
            listaCardsScroll(e, lista_cards, 10);
        }); */
        boton.addEventListener('pointerleave', () => {
            clearInterval(scrollfuncion);
        });
        /* boton.addEventListener('touchend', () => {
            clearInterval(scrollfuncion);
        }); */
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
    if (palenquePlayer) {
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

            } else {
                palenqueDOM.classList.remove('mostrar');
            }
            let artista_velaria = document.querySelector('.evento__artista');
            let descripcion_velaria = document.querySelector('.evento__texto');
            let fecha = document.querySelector('.evento__titulo');
            artista_velaria.innerHTML = videoData.velaria.artista;
            descripcion_velaria.innerHTML = videoData.velaria.txt;
            fecha.innerHTML = "Eventos para el " + videoData.dia + " de Julio";
            for (const videoDataKey in videoData.velaria.redes) {

                let enlaceRedElement = velaria.querySelector('.' + videoDataKey);

                enlaceRedElement.attributes['href'].value = videoData.velaria.redes[videoDataKey];
                enlaceRedElement.parentElement.classList.add('visible');
            }
            for (const videoDataKey in videoData.palenque.redes) {

                let enlaceRedElement = palenqueDOM.querySelector('.' + videoDataKey);

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

    scrollfuncion = setInterval(scrolling, listaCards, scrollSize);


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