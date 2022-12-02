const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', content);

content();

function content() {
    // define where in teh window to trigger the content animation
    const triggerHeight = window.innerHeight / 5 *4 

    boxes.forEach(box => {
        // get the top fo the content box
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerHeight) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

