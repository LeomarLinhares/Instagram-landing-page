var imgSrcs = [
    "./img/slide1.jpg",
    "./img/slide2.jpg",
    "./img/slide3.jpg",
    "./img/slide4.jpg",
    "./img/slide5.jpg"
]

var index = 0;

function sliderInterval() {
    window.setInterval('changeImage()', 5000);
}

function changeImage() {
    if (index == 4) {
        index = 0;
    } else {
        index++
    }
    let image = document.querySelector('#slider');
    image.src = imgSrcs[index];
}

sliderInterval();