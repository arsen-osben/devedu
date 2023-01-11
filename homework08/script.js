class Student {
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

let student1 = new Student('ZNTU', 1, 'Petro Petrovych Petrenko');
console.log(student1.getInfo());
console.log(student1.marks);
student1.marks = 5;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.marks);
student1.recover();
console.log(student1.marks);
