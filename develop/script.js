let box = document.querySelector('#box');
let movement = 10; 


window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = '10';
    box.style.right= '0';
});


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': style.top = `${parseInt(style.top) - movement}px`; break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + movement}px`; break;
        case 'ArrowLeft': style.left = `${parseInt(style.left) - movement}px`; break;
        case 'ArrowRight': style.left = `${parseInt(style.left) + movement}px`; break;
    }
});