const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');

open.addEventListener('click', () => container.classList.add('show-nav'));
open.addEventListener('click', () => document.body.classList.add('show-nav'));

close.addEventListener('click', () => container.classList.remove('show-nav')); 
close.addEventListener('click', () => document.body.classList.remove('show-nav'));