let n, m, p, summ = 0;
n = +prompt('Input N:');
while ( (!Number.isInteger(n)) || (n < 0)) {
    alert('integer positive only');
    n = +prompt('Input N:');
    console.log(n);
}

m = +prompt('Input M:');
while ( (!Number.isInteger(m)) || (m < 0) || (n >= m)) {
    alert('integer positive only and > m');
    m = +prompt('Input M:');
    console.log(m);
}

p = +confirm('Input odd parametr');
//console.log(p);
for (let i = n; i <= m; i++) {
    if (p) {
        if (!((i % 2) === 0)) {
            summ = summ + i;
        }
    } else {
        summ = summ + i;
    }
}
console.log('=== ', summ);
