const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

/* 1 */
function getMyTaxes(salary) {
    return this.tax * salary;
}

console.log('#1: ', getMyTaxes.call(ukraine, 100000));

/* 2 */
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log('#2: ', getMiddleTaxes.call(ukraine));

/* 3 */
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.middleSalary * this.vacancies;
}
console.log('#3: ', getTotalTaxes.call(ukraine));

/* 4 */
function getMySalary() {
    let obj = {}
    obj.salary = Math.floor(Math.random() * (2000 - 1500) + 1500);
    obj.taxes = (obj.salary * this.tax).toFixed(2);
    obj.profit = obj.salary - obj.taxes;
    return obj;
}
console.log('#4: ', getMySalary.call(litva));
let timerId = setInterval(() => console.log('#4: ', getMySalary.call(litva)) , 10000);

