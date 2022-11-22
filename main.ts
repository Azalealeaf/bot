input.onButtonPressed(Button.A, function () {
    servos.P2.run(50)
    basic.pause(500)
    servos.P2.stop()
})
input.onButtonPressed(Button.B, function () {
    servos.P1.run(25)
    basic.pause(500)
    servos.P1.stop()
})
basic.forever(function () {
	
})
