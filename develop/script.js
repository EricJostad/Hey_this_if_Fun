let box = document.querySelector('#box');
let movement = 10; 


window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = '10';
    box.style.right= '0';
});


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowUp': 
        box.style.top = parseInt(box.style.top) - movement + 'px'; 
            break;
        case 'ArrowDown': 
        box.style.top = parseInt(box.style.top) + movement + 'px'; 
            break;
        case 'ArrowLeft': 
        box.style.top = parseInt(box.style.top) - movement + 'px'; 
            break;
        case 'ArrowRight': 
        box.style.top = parseInt(box.style.top) + movement + 'px'; 
            break;
    }
});