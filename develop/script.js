let box = document.querySelector('#box');
let movement = 10; 


window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = '10';
    box.style.top= '10';
});


window.addEventListener('keyup', (event) => {
    switch (event.key) {
        case 'ArrowUp': 
        box.style.top = parseInt(box.style.top) - movement + 'px'; 
            break;
        case 'ArrowDown': 
        box.style.top = parseInt(box.style.top) + movement + 'px'; 
            break;
        case 'ArrowLeft': 
        box.style.left = parseInt(box.style.top) - movement + 'px'; 
            break;
        case 'ArrowRight': 
        box.style.left = parseInt(box.style.top) + movement + 'px'; 
            break;
    }
});