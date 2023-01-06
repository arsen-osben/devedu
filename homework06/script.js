const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

/* 1 */
function getSubjects(obj) {
    let arr = [];
    for (key in obj.subjects) {
        let subjectName = key;
        subjectName = subjectName.split('_').join(' ');
        subjectName = subjectName.charAt(0).toUpperCase() + subjectName.slice(1);
        arr.push(subjectName);
    }
    return arr;
}

console.log('#1: ', getSubjects(students[0]));

/* 2 */
function getAverageMark(obj) {
    let summBalls = 0;
    let countBalls = 0;
    for (let key in obj.subjects) {
        for (let i = 0; i < obj.subjects[key].length; i++ ) {
            summBalls = summBalls + obj.subjects[key][i];
            countBalls++;
        }
    }
    if (countBalls !== 0 ) {
        return (summBalls / countBalls).toFixed(2);
    }
    else {
        return 'Data error'
    }
}

console.log('#2: ', getAverageMark(students[0]));


/* 3 */
function getStudentInfo(obj) {
    let newObj = {};
    newObj['course'] = obj.course;
    newObj['name'] = obj.name;
    newObj['averageMark'] = +getAverageMark(obj);
    return newObj;
}

console.log('#3: ', getStudentInfo(students[0]));

/* 4 */
function getStudentsNames(obj) {
    let arrNames = [];
    for (let key in obj) {
        for (let innerKey in obj[key]) {
            if (innerKey === 'name') {
                arrNames.push(obj[key][innerKey]);
            }
        }        
    }
    arrNames.sort();
    return arrNames;
}

console.log('#4: ', getStudentsNames(students));


/* 5 */
function getBestStudent(obj) {
    let newObj = {};
    let maxAverage = 0;
    counter = 0;
    for (let key in obj) {
        newObj[obj[key]['name']] = getAverageMark(obj[key]);
        let currentMax = getAverageMark(obj[key]);
        if (currentMax > maxAverage) {
            maxAverage = currentMax;
        }
        //newObj['average' + counter] = obj[key]['name'];
        counter++;
    }
    for (let key in newObj) {
        if (newObj[key] == maxAverage) {
            return key;
        }
    }
}

console.log('#5: ', getBestStudent(students));

/* 6 */
function calculateWordLetters(str) {
    let newObj = {};
    for (let i = 0; i < str.length; i++) {
        let currentSymbol = str[i];
        if (currentSymbol in newObj) {
            newObj[currentSymbol]++;
        }
        else {
            newObj[currentSymbol] = 1;
        }
    }
    return newObj;
}

console.log('#6: ', calculateWordLetters("тест"));
