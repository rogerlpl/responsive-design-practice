const consulta = window.matchMedia('(max-width:500px)');
consulta.addListener(mediaQuery)

var $burgerButton = document.getElementById("burger-button")
var $menu = document.getElementById("menu")

function mediaQuery() {
  if (consulta.matches) {
    $burgerButton.addEventListener('touchstart', togglemenu)
  }
  else {
    $burgerButton.removeEventListener('touchstart', togglemenu)
  }
}

function togglemenu() {
  $menu.classList.toggle('active')
  $burgerButton.classList.toggle('icon-close')
}


mediaQuery()

//lazy loading
const bLazy = new Blazy({
  selector: 'img'
})

const $body = document.body

//gestures touch
const gestures = new Hammer($body, null);

//values of directions in HammerJS
const right =4
const left = 2

gestures.on('swipe', (event) => {
  if (event.direction === right) {
    menu.classList.add("active");
  }
  if (event.direction === left) {
    menu.classList.remove("active");
  }
})