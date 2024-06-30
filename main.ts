input.onButtonPressed(Button.A, function () {
    showName()
})
function noop6 () {
	
}
function rule (y2: number) {
	
}
// inkybit.draw_line(0, y2, 249, y2, inkybit.Color.ACCENT)
function vrule (y22: number) {
	
}
// inkybit.draw_line(y22, 0, y22, 119, inkybit.Color.ACCENT)
input.onButtonPressed(Button.AB, function () {
    inkybit.clear()
    rule(61)
    vrule(110)
    inkybit.setPixelSize(inkybit.PixelSize.Normal)
    inkybit.drawText(
    "Oops!",
    70,
    50,
    inkybit.Color.Accent,
    inkybit.TextSize.Large
    )
    inkybit.show()
})
// inkybit.draw_line(y22, 0, y22, 119, inkybit.Color.ACCENT)
input.onButtonPressed(Button.B, function () {
    inkybit.clear()
    rule(61)
    vrule(110)
    inkybit.setPixelSize(inkybit.PixelSize.Normal)
    inkybit.drawText(
    "Girl",
    70,
    50,
    inkybit.Color.Accent,
    inkybit.TextSize.Large
    )
    inkybit.show()
})
function showName () {
    inkybit.clear()
    rule(61)
    vrule(110)
    inkybit.setPixelSize(inkybit.PixelSize.Normal)
    inkybit.drawText(
    "Bruce",
    70,
    50,
    inkybit.Color.Black,
    inkybit.TextSize.Large
    )
    inkybit.drawText(
    "Riverside Squares",
    35,
    100,
    inkybit.Color.Accent,
    inkybit.TextSize.Regular
    )
    inkybit.show()
}
function write (str2: string, x: number, size: number) {
    l = inkybit.measureText(str2, inkybit.TextSize.Regular)
    inkybit.drawText(str2, (125 - l) / 2, x, inkybit.Color.Black, size)
}
let l = 0
let m = 0
let msg1 = "Bruce"
showName()
basic.forever(function () {
	
})
