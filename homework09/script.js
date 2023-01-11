function generateBlocks() {
    let divContainer = document.createElement('div');
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

function generateBlocksIntervalHelper() {
    let divContainer = document.getElementById('elem');
    if (divContainer) {
        for (let i = 1; i<= 25; i++) {
            let currentDiv = divContainer.querySelector('div:nth-child('+i+')');
            currentDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        }
    }
    else {
        divContainer = document.createElement('div');
        divContainer.id = 'elem';
        divContainer.style.display = 'flex';
        divContainer.style.flexWrap = 'wrap';
        divContainer.style.margin = '50px auto';
        divContainer.style.width = '250px';
        document.body.append(divContainer);
        for (let i=1; i<=25; i++) {
            let currentDiv = document.createElement('div')
            currentDiv.style.width = '50px';
            currentDiv.style.height = '50px';
            currentDiv.style.transition = 'background-color .5s ease';            
            currentDiv.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
            divContainer.append(currentDiv);
        }
    }
};
function generateBlocksInterval() {
    let timerId = setInterval(() => generateBlocksIntervalHelper(), 1000);
}
document.addEventListener('DOMContentLoaded', generateBlocks);
