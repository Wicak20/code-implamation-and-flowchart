const divideAndSort = (number) => {
    const numberString = number.toString()

    const numberArray = numberString.split('0')

    const sortedArray = numberArray.map((num) => {
        return parseInt(num.split('').sort().join(''))
    })

    const result = parseInt(sortedArray.join(''))
    return result
}

const input = 5956560159466056
const output = divideAndSort(input)
console.log(output)