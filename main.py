def on_button_pressed_a():
    showName()
input.on_button_pressed(Button.A, on_button_pressed_a)

def noop6():
    pass
def rule(y2: number):
    pass
# inkybit.draw_line(0, y2, 249, y2, inkybit.Color.ACCENT)
def vrule(y22: number):
    pass
#    inkybit.draw_line(y22, 0, y22, 119, inkybit.Color.ACCENT)

def on_button_pressed_b():
    inkybit.clear()
    rule(61)
    vrule(110)
    inkybit.set_pixel_size(inkybit.PixelSize.NORMAL)
    inkybit.draw_text("Girl", 70, 50, inkybit.Color.ACCENT, inkybit.TextSize.LARGE)
    inkybit.show()
input.on_button_pressed(Button.B, on_button_pressed_b)

def showName():
    inkybit.clear()
    rule(61)
    vrule(110)
    inkybit.set_pixel_size(inkybit.PixelSize.NORMAL)
    inkybit.draw_text("Bruce", 70, 50, inkybit.Color.BLACK, inkybit.TextSize.LARGE)
    inkybit.draw_text("Riverside Squares",
        35,
        100,
        inkybit.Color.ACCENT,
        inkybit.TextSize.REGULAR)
    inkybit.show()
def write(str2: str, x: number, size: number):
    global l
    l = inkybit.measure_text(str2, inkybit.TextSize.REGULAR)
    inkybit.draw_text(str2, (125 - l) / 2, x, inkybit.Color.BLACK, size)
m = 0
l = 0
msg1 = "Bruce"
showName()

def on_forever():
    pass
basic.forever(on_forever)
