const progress =  document.querySelector(".progress");
const prev =  document.getElementById("previous");
const next =  document.getElementById("next");
const circles =  document.querySelectorAll(".circle");

// index of which one is active
let currentActive = 1; 

// next button: listen to click and take current active adn increase by 1
next.addEventListener('click', () => {
    currentActive++;

    // cant go further than number availible
    if(currentActive > circles.length) {
        currentActive = circles.lenth
    }
    update()
})

// previous button: listen to click and decrease current active by 1
prev.addEventListener('click', () => {
    currentActive--;

    if(currentActive < 1) {
        currentActive = 1;
    }

    update();
})

// add the active class to the circle, idx = index
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    })

    // add the progress bar 
    const actives = document.querySelectorAll('.active');
    // calculate teh bar width e.g. 33%, 66% 100%
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';

    // change the state of the buttons
    if(currentActive === 1) {
        prev.disabled = true;
    } else if(currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}