console.log('Loaded test.js');

// Hide the animation initially
let loader = document.querySelector('#loading-animation-wrapper');
loader.classList.add('hide');

document.querySelector('#submit').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Button Clicked');
    
    // Reveal animation.
    loader.classList.remove('hide', 'hide-animate');
    loader.classList.add('show');
    
    // after 2 seconds, hide it again.
    setTimeout(() => {
        loader.classList.remove('show');
        loader.classList.add('hide-animate');
    }, 2000);

})