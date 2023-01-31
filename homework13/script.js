function* createIdGenerator() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


/* adv */

document.addEventListener('DOMContentLoaded', function () {
    function* newFontGenerator(fs) {
        let i = fs;
        while (true) {
            console.log(i);
            let res = yield i;
            if (res === 'up') {
                i += 2;
            }
            if (res === 'down') {
                i -= 2;
            }
        }

    };
    const fz = newFontGenerator(14);

    function setNewFont(curDirection){
        let newFont = `${fz.next(curDirection).value}px`;
        document.querySelectorAll('body *').forEach(curElement => curElement.style.fontSize = newFont);
    }
    document.addEventListener('keydown', function (e) {
        if (e.code == 'ArrowUp') {
            setNewFont('up');
        }
        if (e.code == 'ArrowDown') {
            setNewFont('down');
        }
    });
});
