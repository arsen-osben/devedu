export class Student {
    constructor(university, course, fullName) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.Marks = [5,4,4,5];
        this.activity = true;
    }
    getInfo() {
        return 'Студент ' + this.course + ' курсу ' + this.university + ',  ' + this.fullName;
    }

    get marks() {
        if (this.activity) {
            return this.Marks;
        }
        else {
            return null;
        }
    }

    set marks(value) {
        if (this.activity) {
            this.Marks.push(value);
        }
        else {
            return null;
        }
    }

    getAverageMark() {
        let summ = 0;
        for (let i = 0; i < this.Marks.length; i++) {
            summ += this.Marks[i];
        }
        return summ / this.Marks.length;
    }

    dismiss() {
        this.activity = false;
    }

    recover() {
        this.activity = true;
    }

}
