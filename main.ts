input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
	
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    RingbitCar.freestyle(100, 50)
    basic.pause(600)
    RingbitCar.forward()
    basic.pause(300)
    RingbitCar.freestyle(100, 50)
    basic.pause(600)
    RingbitCar.forward()
    basic.pause(300)
})
