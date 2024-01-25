let maaltafel_van_3 = 0
basic.forever(function () {
    basic.showNumber(maaltafel_van_3)
    if (maaltafel_van_3 < 12) {
        maaltafel_van_3 += 3
    } else {
        maaltafel_van_3 = 0
    }
})
