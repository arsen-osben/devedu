export function sum(n,m,p) {
    let summ = 0;
    for (let i = n; i <= m; i++) {
        if (p) {
            if (!((i % 2) === 0)) {
                summ = summ + i;
            }
        } else {
            summ = summ + i;
        }
    }
    return summ;
}
