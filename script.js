const mario = document.querySelector('.super-mario')
const pipe = document.querySelector('.pipe')

const jump = () => {
    mario.classList.add('jump-mario')

    setTimeout(() => {
        mario.classList.remove('jump-mario')
    }, 500)
}
const loopgame = setInterval(() => {
    const pipe_position = pipe.offsetLeft
    const mario_position = +window
        .getComputedStyle(mario)
        .bottom.replace('px', '')

    if (pipe_position <= 120 && pipe_position > 0 && mario_position < 80) {
        pipe.style.animation = 'none'
        pipe.style.left = `${pipe_position}px`

        mario.style.animation = 'none'
        mario.style.bottom = `${mario_position}px`

        mario.src = './images/mario-game-over.png'
        mario.style.width = '75px'
        mario.style.marginLeft = '45px'

        clearInterval(loopgame)
    }
}, 10)

document.addEventListener('keydown', jump)
