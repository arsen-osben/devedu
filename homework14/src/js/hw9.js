export function generateBlocks() {
    let divContainer = document.createElement('div');
    divContainer.id = 'homework9'
    divContainer.style.display = 'flex';
    divContainer.style.flexWrap = 'wrap';
    divContainer.style.margin = '50px auto';
    divContainer.style.width = '250px';
    document.body.append(divContainer);
    for (let i=1; i<=25; i++) {
        let currentDiv = document.createElement('div')
        currentDiv.style.width = '50px';
        currentDiv.style.height = '50px';
        currentDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        divContainer.append(currentDiv);
    }
};

