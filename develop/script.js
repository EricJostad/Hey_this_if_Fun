let movement = 10; 

window.addEventListener('keydown', (event) => {
    const {style} = block;
    switch (event.key) {
        case 'ArrowUp': style.top = `${parseInt(style.top) - movement}px`; break;
        case 'ArrowDown': style.top = `${parseInt(style.top) + movement}px`; break;
        case 'ArrowLeft': style.left = `${parseInt(style.left) - movement}px`; break;
        case 'ArrowRight': style.left = `${parseInt(style.left) + movement}px`; break;
    }
});