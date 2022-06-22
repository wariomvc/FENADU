
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var jessejoyVideoUrl = 'MbwNBa716ro';

var julionVideoUrl = '3OuvIS4nrFI';
var aguilarVideoUrl = 'bIINZGNVMVA';
var grandiosasVideoUrl = '_sJWla4vwkY';
var videoUrl = [
    {
        dia: 15,
        palenque: {
            url: '3OuvIS4nrFI',
            artista: 'Julión Álvarez',
            txt: '  Julión Álvarez y su Norteño Banda será uno de los artistas encargados de inaugurar la Feria Nacional de Durango 2022 (Fenadu)',

        },
        velaria: {
            url: 'bIINZGNVMVA',
            artista: 'La Disnastia Aguilar',
            txt: 'La fiesta de los duranguenses arrancará el 15 de julio con las voces de la dinastía Aguilar con Ángela, Pepe y Leonardo.'
        }

    },
    {
        dia: 16,
        velaria: {
            url:'wQLXVf4Huco',
            artista: 'Grandiosas',
            txt: 'Grandiosas, es un concepto musical con más de 10 años de éxito en el que grandes voces femeninas se unen en un mismo escenario para combinar su talento y belleza',
        },
        palenque: {
            url: 'L-66l5G6WDQ',
            artista: 'Carín León',
            txt: 'Carín León está teniendo un notable éxito en México durante los últimos años y ahora estará en la FENADU 2022',
        }
    },
    {
        dia: 17,
        velaria: {
            url: 'a46jMPQ544w',
            artista: 'Bronco',
            txt: 'Los Fieles seguidores de Lupe y grupo Bronco disfrutarán de la música de este experimentado grupo con exitos clásico',

        },
        palenque: null
    },
    {
        dia: 18,
        velaria: {
            url: 'TMT9MNM-NHg',
            artista: 'Jesse y Joy',
            txt: 'Jesse & Joy regresan a la capital de Durango, ahora como unos de los invitados estelares a la edición 2022 de la Feria Nacional Durango (Fenadu)'
        }
    }
]


// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
//var player;
/* function onYouTubeIframeAPIReady(urlvideo) {
    player = new YT.Player('player', {
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
} */

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    //event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}