// Menu Button
const button = document.querySelector('.menu_btn');
const side = document.querySelector('.side');
const overlay = document.querySelector('.overlay');
const pro = document.querySelector('.pro');

if (button) button.addEventListener('click', e)
if (overlay) overlay.addEventListener('click', de)


function e() {
    side.classList.add('active')
    overlay.classList.add('active')
}
function de() {
    side.classList.remove('active')
    overlay.classList.remove('active')
    pro.classList.remove('active')
}

// Sub Button
const arrow = document.querySelector('.arrow');

if (arrow) arrow.addEventListener('click', sub)

function sub() {
    const pro = document.querySelector('.pro');
    if (pro.classList.contains('active')) {
        pro.classList.remove('active')
        arrow.classList.remove('active');
    } else {
        pro.classList.add('active')
        arrow.classList.add('active');
    }
}




