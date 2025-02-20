const arr = [5, 5]

function average(numbers) {

    let result = 0;

    for(let i = 0; i < numbers.length; i++) {
        result += numbers[i];
    }

    return result / numbers.length;
}

console.log(average(arr));