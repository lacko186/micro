input.onPinPressed(TouchPin.P0, function () {
    record.startRecording(record.BlockingState.Nonblocking)
})
input.onButtonPressed(Button.A, function () {
    Helyzet += -1
    led.toggle(Helyzet, 4)
    led.unplot(Helyzet + 1, 4)
})
input.onGesture(Gesture.Shake, function () {
    servos.P2.setAngle(90)
    servos.P2.run(50)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(Helyzet, 4 - index)
        basic.pause(10)
        led.unplot(Helyzet, 0)
        led.unplot(Helyzet, 1)
        led.unplot(Helyzet, 2)
        led.unplot(Helyzet, 3)
    }
    if (led.point(4, 4)) {
        for (let index = 0; index < 4; index++) {
            basic.showLeds(`
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            basic.showLeds(`
                # . # . #
                . # # # .
                . . # . .
                . # . # .
                # . . . #
                `)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    Helyzet += 1
    led.toggle(Helyzet, 4)
    led.unplot(Helyzet - 1, 4)
})
input.onPinPressed(TouchPin.P1, function () {
    record.playAudio(record.BlockingState.Nonblocking)
})
input.onSound(DetectedSound.Loud, function () {
    servos.P2.stop()
})
let Helyzet = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ode), music.PlaybackMode.InBackground)
Helyzet = 0
basic.showLeds(`
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    `)
basic.forever(function () {
	
})
