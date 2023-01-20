const sounds = {
    'KeyA': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom2.ogg',
    'KeyS': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/tom3.ogg',
    'KeyD': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/pad1.ogg',
    'KeyF': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/hip-hop/snare1.ogg',
    'KeyG': 'https://www.virtualdrumming.com/drums/virtual-drum-sounds/crash1.ogg'
}

const play = sound => {
    console.log("playing ",sound);
    let audio = new Audio(sound);
    audio.play();
}

document.querySelector('.list-btns').addEventListener('click', function(e) {
    const tgt = e.target.closest('button').getAttribute('data-key');
    let buttons = document.querySelectorAll('.btn');
    for (let i=0; i< buttons.length; i++) {
        buttons[i].classList.remove('active');
    }    
    e.target.classList.add('active');
    if (tgt) play(sounds[tgt]);
});

window.addEventListener('keypress', function(e) {
    console.log(e.code);
    if (sounds[e.code]) {
        let buttons = document.querySelectorAll('.btn');
        
        for (let i=0; i< buttons.length; i++) {
            if (buttons[i].getAttribute('data-key') == e.code ) {
                buttons[i].click();
            }
        }
    }
});
