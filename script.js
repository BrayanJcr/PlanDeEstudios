//----------------------------Declaracion de Colores----------------------------------------------------
var
colorPrimerPeriodo= "var(--primerperiodo)";
colorSegundoPeriodo= "var(--segundoperiodo)";
colorTercerPeriodo= "var(--tercerperiodo)";
colorCuartoPeriodo= "var(--cuartoperiodo)";
colorQuintoPeriodo= "var(--quintoperiodo)";
colorSextoPeriodo= "var(--sextoperiodo)";
colorSeptimoPeriodo= "var(--septimoperiodo)";
colorOctavoPeriodo= "var(--octavoperiodo)";
colorNovenoPeriodo= "var(--novenoperiodo)";
colorDecimoPeriodo= "var(--decimoperiodo)";

//-----------------Declaracion de PopupVideo-----------------------------------------------------------
var 
overlayVid = document.getElementById('overlayVid');
popupVid = document.getElementById('popupVid');
tituloPopupVid = document.getElementById('titulo-popupVid');
textoPopupVid = document.getElementById('parrafo-popupVid');
btncerrarpopupVid = document.getElementById('btn-cerrar-popupVid');

//-----------------Declaracion de PopupSlider--------------------------------------------------------
var 
overlaySli = document.getElementById('overlaySli');
popupSli = document.getElementById('popupSli');
tituloPopupSli = document.getElementById('titulo-popupSli');
textoPopupSli = document.getElementById('parrafo-popupSli');
btncerrarpopupSli = document.getElementById('btn-cerrar-popupSli');
sliderColor= document.getElementById('container-slider');

//---------------------------botones iniciales-------------------------------------------------------

btnuno = document.getElementById("btnuno");
btndos = document.getElementById("btndos");
btntres = document.getElementById("btntres");
btncuatro = document.getElementById("btncuatro");
btncinco = document.getElementById("btncinco");
btnseis = document.getElementById("btnseis");
btnsiete = document.getElementById("btnsiete");
btnocho = document.getElementById("btnocho");
btnnueve = document.getElementById("btnnueve");
btndiez = document.getElementById("btndiez");

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

//Api de video Listo para usar 
function onPlayerReady(event) {

    //Boton de quinto periodo primero fila
    btnCincoUno.addEventListener('click',eventbtnCincoUno);

    //Boton de cerrar popupVideo
    btncerrarpopupVid.addEventListener('click',function(){
        overlayVid.classList.remove('active');
        popupVid.classList.remove('active');
        player.pauseVideo();
    });

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// ------------------------------------------------Declaracion de cada boton -----------------------
var
//Fila 1
btnCincoUno = document.getElementById("btn-cinco-uno");
btnSeisUno = document.getElementById("btn-sies-uno");
btnSieteUno = document.getElementById("btn-siete-uno");
btnOchoUno = document.getElementById("btn-ocho-uno");
btnNueveUno = document.getElementById("btn-nueve-uno");

//Fila 2
btnUnoDos = document.getElementById("btn-uno-dos");
btnCuatroDos = document.getElementById("btn-cuatro-dos");
btnSieteDos = document.getElementById("btn-siete-dos");
btnOchoDos = document.getElementById("btn-ocho-dos");
btnNueveDos = document.getElementById("btn-nueve-dos");
btnDiezDos = document.getElementById("btn-diez-dos");

//Fila 3
btnUnoTres = document.getElementById("btn-uno-tres");
btnSeisTres = document.getElementById("btn-seis-tres");
btnSieteTres = document.getElementById("btn-siete-tres");
btnOchoTres = document.getElementById("btn-ocho-tres");
btnNueveTres = document.getElementById("btn-nueve-tres");
btnDiezTres = document.getElementById("btn-diez-tres");

//Fila 4
btnTresCuatro = document.getElementById("btn-tres-cuatro");
btnCincoCuatro = document.getElementById("btn-cinco-cuatro");

//Fila 5
btnDosCinco = document.getElementById("btn-dos-cinco");
btnCincoCinco = document.getElementById("btn-cinco-cinco");
btnSieteCinco = document.getElementById("btn-siete-cinco");
btnOchoCinco = document.getElementById("btn-ocho-cinco");

//Fila 6
btnDosSeis = document.getElementById("btn-dos-seis");
btnSieteSeis = document.getElementById("btn-cinco-seis");

//Fila 7
btnSeisSiete = document.getElementById("btn-seis-siete");
btnOchoSiete = document.getElementById("btn-ocho-siete");

//Fila 8
btnNueveOcho = document.getElementById("btn-nueve-ocho");

//Boton de cerrar popupSlider
btncerrarpopupSli.addEventListener('click',function(){
    overlaySli.classList.remove('active');
    popupSli.classList.remove('active');
});

//---------------------------------Funciones de los Botones---------------------------------------

//Boton de quinto periodo primero fila VIDEO
function eventbtnCincoUno(){
    overlayVid.classList.add('active');
    popupVid.classList.add('active');

    //Asingnacion de colores por periodo
    btncerrarpopupVid.style.color = colorQuintoPeriodo;
    tituloPopupVid.style.color = colorQuintoPeriodo;
    textoPopupVid.style.color = colorQuintoPeriodo;
    popupVid.style.boxShadow  = "6px 6px 5px 0px var(--quintoperiodo,.3)";

    //Iniciar el video automaticamente
    player.stopVideo();
    player.playVideo();

    //Definir los textos en el Popup
    tituloPopupVid.textContent = "Cinco Uno";
    textoPopupVid.textContent = "Cinco Uno relleno y mas y mas relleno y mas relleno y asi muchoooooo massss relleno";
}

//Boton de octavo periodo primero fila SLIDER
btnOchoUno.addEventListener('click',function(){
    overlaySli.classList.add('active');
    popupSli.classList.add('active');

    //Asingnacion de colores por periodo
    btncerrarpopupSli.style.color = colorOctavoPeriodo;
    tituloPopupSli.style.color = colorOctavoPeriodo;
    textoPopupSli.style.color = colorOctavoPeriodo;

    popupSli.style.boxShadow  = "6px 6px 5px 0px var(--octavoperiodo,.3)";
    sliderColor.style.boxShadow  = "6px 6px 5px 0px var(--octavoperiodo,.3)";


    //Definir los textos en el Popup
    tituloPopupSli.textContent = "Ocho Uno";
    textoPopupSli.textContent = "Ocho Uno relleno y mas y mas relleno y mas relleno y asi muchoooooo massss relleno";
});


//----------------------------------------------Funciones de Barras de Progreso-------------------------------------
//Barras de progresos
btnuno.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("uno");
    document.getElementById("progress-9").classList.toggle("uno");
    document.getElementById("progress-8").classList.toggle("uno");
});

btndos.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("dos");
    document.getElementById("progress-9").classList.toggle("dos");
    document.getElementById("progress-8").classList.toggle("dos");
});

btntres.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("tres");
    document.getElementById("progress-9").classList.toggle("tres");
    document.getElementById("progress-8").classList.toggle("tres");
});

btncuatro.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("cuatro");
    document.getElementById("progress-9").classList.toggle("cuatro");
    document.getElementById("progress-8").classList.toggle("cuatro");
    document.getElementById("progress-7").classList.toggle("uno-for");
});

btncinco.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("cinco");
    document.getElementById("progress-9").classList.toggle("cinco");
    document.getElementById("progress-8").classList.toggle("cinco");
    document.getElementById("progress-7").classList.toggle("dos-for");
    document.getElementById("progress-6").classList.toggle("uno-five");
});

btnseis.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("seis");
    document.getElementById("progress-9").classList.toggle("seis");
    document.getElementById("progress-8").classList.toggle("seis");
    document.getElementById("progress-7").classList.toggle("tres-for");
    document.getElementById("progress-6").classList.toggle("dos-five");
    document.getElementById("progress-5").classList.toggle("dos");
});

btnsiete.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("siete");
    document.getElementById("progress-9").classList.toggle("siete");
    document.getElementById("progress-8").classList.toggle("siete");
    document.getElementById("progress-7").classList.toggle("cuatro-for");
    document.getElementById("progress-6").classList.toggle("tres-five");
    document.getElementById("progress-5").classList.toggle("cuatro");
});

btnocho.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("ocho");
    document.getElementById("progress-9").classList.toggle("ocho");
    document.getElementById("progress-8").classList.toggle("ocho");
    document.getElementById("progress-7").classList.toggle("cinco-for");
    document.getElementById("progress-6").classList.toggle("cuatro-five");
    document.getElementById("progress-5").classList.toggle("seis");
});

btnnueve.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("nueve");
    document.getElementById("progress-9").classList.toggle("nueve");
    document.getElementById("progress-8").classList.toggle("nueve");
    document.getElementById("progress-7").classList.toggle("seis-for");
    document.getElementById("progress-6").classList.toggle("cinco-five");
    document.getElementById("progress-5").classList.toggle("ocho");
});

btndiez.addEventListener('click', function(){
    document.getElementById("progress-10").classList.toggle("diez");
    document.getElementById("progress-9").classList.toggle("diez");
    document.getElementById("progress-8").classList.toggle("diez");
    document.getElementById("progress-7").classList.toggle("siete-for");
    document.getElementById("progress-6").classList.toggle("seis-five");
    document.getElementById("progress-5").classList.toggle("diez");
});








