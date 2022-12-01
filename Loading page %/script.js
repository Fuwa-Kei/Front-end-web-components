const loadText = document.querySelector('.loading-text');

let load = 0;

let int = setInterval(loading, 30);

function loading() {
    load++

    if(load>99) {
        clearInterval(int);
    }
    // template string for load
    loadText.innerText = load + "%";
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

// map out range of numbers to another range of numbers (% count to opacity)
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}