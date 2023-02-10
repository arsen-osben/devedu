export function getMaxDigit(num) {
    let arrayOfDigits = num.toString().split('').map(Number);
    return Math.max.apply(null, arrayOfDigits);
}
