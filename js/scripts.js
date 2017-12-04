const aButton = document.querySelector('.a-btn')
const bButton = document.querySelector('.b-btn')
const cButton = document.querySelector('.c-btn')

const reelsContainer = document.querySelector('.reels-container')
const popOver = document.querySelector('.pop-over')
const closeButton = document.querySelector('.close-btn')
const slider = document.querySelector('.slider-container')
const sliderHandle = document.querySelector('#slider .ui-slider-handle')

const audio = document.querySelector('audio')

function reShuffle() {
  let reels = document.querySelectorAll('.reel')
  let symbols = [...reels]
  audio.play()

  for (let i = symbols.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1))
    let temp = symbols[i]
    symbols[i] = symbols[j]
    symbols[j] = temp
    result = [...symbols]
  }

  symbols.forEach((symbol, index) => {
    setTimeout(() => {
      reelsContainer.appendChild(symbol)
    }, 100 * index)
  })
}

function showPopover() {
  closeSlider()
  popOver.classList.add('open')
}

function closePopover() {
  popOver.classList.remove('open')
}

function showSlider() {
  closePopover()
  slider.classList.add('open')
}

function closeSlider() {
  slider.classList.remove('open')
}

function setVolume(myVolume) {
  audio.volume = myVolume
}

aButton.addEventListener('click', reShuffle)
bButton.addEventListener('click', showPopover)
closeButton.addEventListener('click', closePopover)
cButton.addEventListener('click', showSlider)

$(() => {
  $('#slider').slider({
    min: 0,
    max: 100,
    value: 0,
    range: 'min',
    slide: (event, ui) => {
      setVolume(ui.value / 100)
    },
    change: closeSlider
  })
})
