const robot = require('robotjs')

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

let ref = 1

let timeLeft = 0
let timeAsNumber = 0

readline.question('Por cuanto tiempo queres que funcione? Escribir en segundos', (time) => {

    timeAsNumber=Number(time)
    timeLeft = timeAsNumber

    const mousePosInterval = setInterval(() => {
        const mousePosition = robot.getMousePos()
        robot.moveMouse((100 * ref) + mousePosition.x, mousePosition.y)
        ref = ref * (-1)

        if (ref < 0) {
            robot.mouseClick()
        }
        console.log('Tiempo restante: ' + timeAsNumber + 'seg')
        timeAsNumber = timeAsNumber - 1
    }, 1000)
    setTimeout(() => {
        clearInterval(mousePosInterval)
        console.log('Finished')
        readline.close()
    }, (timeAsNumber * 1000)+1000)
})

