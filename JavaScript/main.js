let tap = document.getElementById('tap');
let nav = document.getElementById('nav');
let header = document.getElementById('head');
let arrow = document.getElementsByClassName('arrow')[0];
let body = document.getElementsByTagName('body')[0];
console.log(body);

tap.onclick = function () {
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
        tap.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    } else {
        tap.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
}


const activeElemOnScroll = function () {
    if ((window.scrollY > 100)) {
        header.classList.add('active');
        arrow.classList.add('active');
    } else {
        header.classList.remove('active');
        arrow.classList.remove('active');
    }
}
arrow.onclick = function () {
    window.scrollTo(0, 0, 'smooth');
}

window.addEventListener('scroll', activeElemOnScroll);

