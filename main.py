def on_button_pressed_a():
    global Helyzet
    Helyzet += -1
    led.toggle(Helyzet, 4)
    led.unplot(Helyzet + 1, 4)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    for index in range(5):
        led.plot(Helyzet, 4 - index)
        basic.pause(10)
        led.unplot(Helyzet, 0)
        led.unplot(Helyzet, 1)
        led.unplot(Helyzet, 2)
        led.unplot(Helyzet, 3)
    if led.point(4, 4):
        for index2 in range(4):
            basic.show_leds("""
                . # . # .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                """)
            basic.show_leds("""
                # . # . #
                . # # # .
                . . # . .
                . # . # .
                # . . . #
                """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global Helyzet
    Helyzet += 1
    led.toggle(Helyzet, 4)
    led.unplot(Helyzet - 1, 4)
input.on_button_pressed(Button.B, on_button_pressed_b)

Helyzet = 0
music._play_default_background(music.built_in_playable_melody(Melodies.ODE),
    music.PlaybackMode.IN_BACKGROUND)
Helyzet = 0
basic.show_leds("""
    # # # # #
    . . . . .
    . . . . .
    . . . . .
    # . . . .
    """)

def on_forever():
    pass
basic.forever(on_forever)
