input.onButtonPressed(Button.A, function () {
    basic.showString("The temperature is " + input.temperature() + " celsius")
})
basic.forever(function () {
    basic.showString("Hello!")
    basic.showString("The length of hello is " + "Hello".length)
})
