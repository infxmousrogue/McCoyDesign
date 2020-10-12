let iconSkipForward = document.querySelector('.bodymovinanim');

let animationSkipForward = bodymovin.loadAnimation({
    container: iconSkipForward,
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
});

let aa = document.querySelector('.animBtn');

aa.addEventListener('click', function() {
    animationSkipForward.playSegments([0, 60], true);
});