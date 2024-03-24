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
    // sub.classList.add('active');

}
function de() {
    side.classList.remove('active');
    overlay.classList.remove('active');
    pro.classList.remove('active');
    // sub.classList.remove('active');
}


// Plus Button
const plus = document.querySelector('.plus')

if (plus) plus.addEventListener('click', p)
function p() {
    const pro = document.querySelector('.pro')
    if (pro.classList.contains('active')) {
        pro.classList.remove('active')
    } else {
        pro.classList.add('active')

    }
}