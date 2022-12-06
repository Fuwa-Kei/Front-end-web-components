const labels = document.querySelectorAll('.form-control label');

labels.forEach(label => {
    label.innerHTML = label.innerText
    // seperate each letter
        .split('') 
    // create new array with span around each letter
        .map((letter, idx) => `<span style ="transition-delay:${idx *50}ms">${letter}</span>`)
    // convert array back into a string
        .join('')
})

