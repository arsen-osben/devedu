/* 1 */
function getRandomArray(length, min, max) {
    let newArr = [];
    for (let i = 0; i < length; i++) {
        newArr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return newArr;
}
console.log('#1 array: ', getRandomArray(15,0,200));

/* 3 */
function getAverage(...numbers) {
    let arr = [...numbers];
    let arrLength = 0;
    let summ = 0;
    for (let i = 0; i < arr.length ; i++ ) {
        if (Number.isInteger(arr[i])) {
            arrLength++;
            summ = summ + arr[i];
        }
    }
    return summ / arrLength;
}

console.log('#3 average: ', getAverage(2,6,10,3.45,1.1));

/* 4 */
function getMedian(...numbers) {
    let arr = [...numbers];
    for (let i = 0; i < arr.length; i++) {
        if (Number.isInteger(arr[i])) {
            let min = arr[i];
            for (let j = i + 1; j < arr.length; j++) {
                if (min > arr[j]) {
                    min = arr[j];
                    arr[j] = arr[i];
                    arr[i] = min;
                }
            }
        }
        else {
            arr.splice(i,1);
        }
    }
    let  arrLength = arr.length % 2; 
    if (!(arrLength == 0)) {
        return arr[Math.floor(arr.length / 2)]; 
    }
    else {
        return (arr[Math.floor(arr.length / 2)] + arr[Math.floor(arr.length / 2 - 1)]) / 2;  
    }
    
}

console.log('#4 mediana : ', getMedian(1, 2, 3, 4, 5, 6.5));

/* 5 */
function filterEvenNumbers(...numbers) {
    let arr = [...numbers];
    return arr.filter(number => {
        return number % 2 !== 0;
    });
}

console.log('#5 even numbers : ', filterEvenNumbers(1, 2, 3, 4, 5, 6));

/* 6 */
function countPositiveNumbers(...numbers) {
    let arr = [...numbers];
    let count = 0;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    return count;
}
console.log('#6 count positive numbers : ', countPositiveNumbers(-1, -2, 3, 4, -5, 6));

/* 7 */
function getDividedByFive(...numbers) {
    let arr = [...numbers];
    return arr.filter(number => {
        return number % 5 === 0;
    });
}

console.log('#7 divide by 5 numbers : ', getDividedByFive(5, 1, 17, 43, 55, 62));
