let n, m, p, summ = 0;
n = prompt('Input N:');
m = prompt('Input M:');
p = prompt('Input odd parametr', 'true');
let validKey = true;
let messageValid = '';
n = parseInt(n);
m = parseInt(m);
if (!Number.isInteger(n)) {
    messageValid = 'N is not integer';
    validKey = false;
}
if (!Number.isInteger(m)) {
    messageValid = 'M is not integer';
    validKey = false;
}
if (validKey) {
    for (let i = n; i <= m; i++) {
        if (p == 'true') {
            if (!((i % 2) === 0)) {
                summ = summ + i;
            }
        } else {
            summ = summ + i;
        }
    }
    console.log('=== ', summ);
}
else {
    console.log(messageValid);
}
