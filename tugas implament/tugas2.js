const PijarFood = (harga, pajak, voucher, jarak) => {
    let potongan = 0
    let biayaKirim = 0
    let biayaPajak = 0

    if (harga >= 50000 && voucher === 'PIJARFOOD5') {
        potongan = Math.min(harga * 0.5, 50000)
    } else if (harga >= 25000 && voucher === 'DITRAKTIRPIJAR') {
        potongan = Math.min(harga * 0.6, 30000)
    }

    if (jarak <= 2) {
        biayaKirim = 5000
    } else {
        biayaKirim = 5000 + (jarak - 2) * 3000
    }

    if (pajak) {
        biayaPajak = harga * 0.05
    }

    const subTotal = harga - potongan + biayaKirim + biayaPajak

    console.log(`Harga: ${harga}`)
    console.log(`Potongan: ${potongan}`)
    console.log(`Biaya Antar: ${biayaKirim}`)
    console.log(`Pajak: ${biayaPajak}`)
    console.log(`SubTotal: ${subTotal}`)

}

PijarFood(65000, true, 'PIJARFOOD5', 2)