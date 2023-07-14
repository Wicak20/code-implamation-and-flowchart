//palindrom
const cekPalindrom = (text) => {
    text = text.replace('', '').toLowerCase()

    const reversedText = text.split('').reverse().join('')
    if (text === reversedText) {
        return 'palindrom'
    } else {
        return 'teks bukan palindrom'
    }
}

const word = 'Kasur'
console.log(cekPalindrom(word))


//reverse word
const reverseWord = (input) => {
    let var1 = input.split(" ")
    let arrKebalik = []
    for (let i = 0; i < var1.length; i++) {
        arrKebalik.push(var1[var1.length - 1 - i])

        // ketika i = 0 => var1[3-1-0] => var1[2]
        // ketika i = 1 => var1[3-1-1] => var1[1]
        // ketika i = 2 => var1[3-1-2] => var1[0]

    }

    return arrKebalik.join(" ")
}

console.log(reverseWord('saya belajar javascript '))