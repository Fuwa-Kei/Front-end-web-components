// bring panels into js
const panels = document.querySelectorAll('.panel');

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    }) 
})

// remove the active class from all teh panels
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}