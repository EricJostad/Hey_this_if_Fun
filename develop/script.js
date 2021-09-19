let box = document.querySelector('.box');
let movement = 5;
let conf = alert('Hello! Click Yes to continue or No to kill the page.')

window.addEventListener('load', () => {
    box.style.position = 'absolute';
    box.style.left = 0;
    box.style.top = 0;
    console.log('Event listener for load hit and ran.')
});


window.addEventListener('keydown', (event) => {
    switch (event.key) {
        case 'ArrowLeft':
            box.style.left = parseInt(box.style.left) - movement + 'px';
            break;
        case 'ArrowRight':
            box.style.left = parseInt(box.style.left) + movement + 'px';
            break;
        case 'ArrowUp':
            box.style.top = parseInt(box.style.top) - movement + 'px';
            break;
        case 'ArrowDown':
            box.style.top = parseInt(box.style.top) + movement + 'px';
            break;
    console.log('I ran!')
    }
    console.log('Event listener for keyup hit and ran.')
});

function test(){

return console.log('Hey, I ran!')

}

test()