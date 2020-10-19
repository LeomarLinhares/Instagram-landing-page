var slideBox = document.querySelector('.slide').children;
var index = -1;

function sliderInterval() {
    window.setInterval('changeImage()', 5500);
}

function changeImage() {
    const fade = document.querySelector('.fade');
    const nextFade = document.querySelector('.nextFade');

    fade.classList.remove('fade');
    nextFade.classList.replace('nextFade', 'fade');

    if (index == 4) {
        index = 0;
    } else {
        index++
    }

    slideBox[index].classList.add('nextFade');
}

sliderInterval()