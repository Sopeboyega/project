const $shadow = document.querySelector('.shadow')
const $light = document.querySelector('.bulb')
const $filaments = document.querySelector('.filaments')

$light.addEventListener(
    'click',
    () => {
        $light.classList.toggle('off')
        $shadow.classList.toggle('off')
        $filaments.classList.toggle('off')
    }
)