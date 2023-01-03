const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

/* 1 */
function findYourHalf(arr) {
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
console.log(findYourHalf(students));


/* 2 */
function addThemes(arr, arrThemes) {
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
        arrFinal[i][0] = arrBoys[i] + ' і ' + arrGirls[i];
        arrFinal[i][1] = arrThemes[i];
    }
    return arrFinal;
}
console.log(addThemes(students, themes));



/* 3 */
function addStudRatingOnce(arr, arrMarks) {
    let arrFinal = [[]];
    for (let i = 0; i < arr.length; i++) {
        arrFinal[i] = [];
        arrFinal[i][0] = arr[i];
        arrFinal[i][1] = arrMarks[i];
    }
    return arrFinal;
}
console.log(addStudRatingOnce(students, marks));


/* 4 */
function addRating(arr, arrThemes) {
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
        arrFinal[i][0] = arrBoys[i] + ' і ' + arrGirls[i];
        arrFinal[i][1] = arrThemes[i];
        arrFinal[i][2] = Math.floor(Math.random()*5 + 1);
    }
    return arrFinal;
}
console.log(addRating(students, themes));
