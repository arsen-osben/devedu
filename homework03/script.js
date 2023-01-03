/* 1 */
function getMaxDigit(num) {
    let arrayOfDigits = num.toString().split('').map(Number);
    return Math.max.apply(null, arrayOfDigits);    
}
console.log('#1: ', getMaxDigit(1657168));

/* 2 */
function myPow(num,pow) {
    let result = num;
    for (let i = 1; i < pow; i++) {
        result = result * num; 
    }
    return result;
}
console.log('#2: ', myPow(2,10));


/* 3 */
function setRightNameFormat(str) {
    let newStr = str.toLowerCase();
    newStr = newStr.charAt(0).toUpperCase() + newStr.slice(1);
    return newStr;
}
console.log('#3: ', setRightNameFormat('uSeRnAmE'));

/* 4 */
function calcSalary(summSalary) {
    return summSalary * 0.805;
}
console.log('#4: salary = ', calcSalary(1000));

/* 5 */
function getRandomNumber(n,m) {
    return Math.floor(Math.random() * (m - n) + n);
}
console.log('#5: random num = ', getRandomNumber(1,10));


/* 6 */
function countLetter(searchSymbol, str, flagLowerCase = false) {
    if (flagLowerCase == true) {
        str = str.toLowerCase();
    } 
    let countSymbol = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == searchSymbol) {
            countSymbol++;
        }
    }
    return countSymbol;
}
console.log('#6: ', countLetter('a','astAlavistA', true));

/* 7 */
function convertCurrency(str) {
    let newSumm = 0;
    str = str.toUpperCase();
    if (str.indexOf('$') !== -1) {
        str = str.replace('$','');
        newSumm = parseInt(str);
        if (Number.isInteger(newSumm)) {
            newSumm = newSumm*40 + 'UAH';
        }
    }
    else {
        if (str.indexOf('UAH') !== -1) {
            str = str.replace('UAH', '');
            newSumm = parseInt(str);
            if (Number.isInteger(newSumm)) {
                newSumm = newSumm/40 + '$';
            }
        }
        else {
            return 'You input bad value';
        }
    }
    
    return newSumm;
}
console.log('#7: ', convertCurrency('1000uaH'));

/* 9 */
function getRandomPassword(count = 8) {
    let password = '';
    if (count > 0) {
        for (let i = 0; i < count; i ++ ) {
            password = password + Math.floor(Math.random()*10);
        }
        return password;
    }
    else {
        return 'Bad value counter'
    }
}
console.log('#9: ', getRandomPassword(15));

/* 11 */
function deleteLetters(letter, str) {
    let regex = new RegExp(letter, 'g');
    return str.replace(regex, '');
}
console.log('#11: ', deleteLetters('a','aablablablablaaallaac'));

/* 12 */
function isPalyndrom(str) {
    let key = true;
    str = str.toLowerCase().replace(/ /g, '');
    strLength = str.length;
    for (let i = 0; i < Math.floor((strLength / 2)); i++) {
        if (str[i] !== str[strLength - i - 1]) {
            key = false;
            return key;
        }
    }
    return key;
}
console.log('#12: ', isPalyndrom('Я несу гусеня'));

/* 13 */
function deleteDuplicateLetter(str) {
    let uniqueLetters = '';
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str.lastIndexOf(str[i]) == str.indexOf(str[i])) {
            uniqueLetters = uniqueLetters + str[i];
        }        
    }
    return uniqueLetters;
}
console.log('#13: ', deleteDuplicateLetter('Бісквіт був дуже ніжним'));
