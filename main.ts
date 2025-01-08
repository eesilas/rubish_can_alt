let d = 0
basic.showIcon(IconNames.Yes)
SuperBit.Servo(SuperBit.enServo.S8, 0)
basic.pause(1000)
SuperBit.Servo(SuperBit.enServo.S8, 90)
basic.pause(1000)
basic.clearScreen()
basic.forever(function () {
    basic.clearScreen()
    d = sonar.ping(
    DigitalPin.P6,
    DigitalPin.P7,
    PingUnit.Centimeters
    )
    if (d <= 10) {
        SuperBit.Servo(SuperBit.enServo.S8, 115)
        led.plot(0, 0)
    } else {
        SuperBit.Servo(SuperBit.enServo.S8, 0)
        led.plot(1, 0)
    }
})
