export function findYourHalf(arr) {
    let arrBoys = [];
    let arrGirls = [];
    let arrFinal = [[]];
    for (let i = 0; i < arr.length ; i++) {
        let tempLength = arr[i].length - 1;
        if (arr[i].charAt(tempLength) == 'а') {
            arrGirls.push(arr[i]);
        }
        else {
            arrBoys.push(arr[i]);
        }
    }
    for (let i = 0; i < arrBoys.length; i++) {
        arrFinal[i] = [];
        arrFinal[i][0] = arrBoys[i];
        arrFinal[i][1] = arrGirls[i];
    }
    return arrFinal;
}
