//Menú
let $burguerButton = document.getElementById('burguer-button')
let $menu = document.getElementById('menu')

// Media Queries
let consulta = window.matchMedia('(max-width:500px)')
consulta.addListener(mediaQuery)

function mediaQuery() {
  if (consulta.matches) {
    console.log('Sí sirvió');
    $burguerButton.style = ('visibility: visible') //Mostrar botón
    $burguerButton.addEventListener('touchstart',togleMenu)
  } else {
    console.log('No sirvió');
    $burguerButton.style = ('visibility: hidden') //Ocultar botón
    $burguerButton.removeEventListener('touchstart',togleMenu)
  }
}
mediaQuery()
function togleMenu () {
  $menu.classList.toggle('active')
  $burguerButton.classList.toggle('icon-cancel')
}
function showMenu() {
  $menu.classList.add('active')
  $burguerButton.classList.toggle('icon-cancel')
}
function hideMenu() {
  $menu.classList.remove('active')
  $burguerButton.classList.toggle('icon-menu')
}
//Lazy Loading con la librería BeLazy
var bLazy = new Blazy({
    selector: 'img'
});

//Gestos touch con la librería Hammer js
var $body = document.body //llamamos a body
var gestos = new Hammer($body);
gestos.on('swipeleft', hideMenu);
gestos.on('swiperight', showMenu);
