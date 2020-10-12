var firstAnim = false;
var one = false;
var two = false;
var three = false;
var four = false;
var five = false;
var six = false;

var animationSkipForward = 0;

function copyColor(theColor, num) {



    /* Copy the text inside the text field */
    navigator.clipboard.writeText(theColor).then(function() {
        playSuccess(num);
    }, function(err) {
        console.error('Async: Could not copy text: ', err);
    });





}




function playSuccess(num) {
    /* Play an animation on each click */


    let iconSkipForward = document.querySelector('.bodymovinanim' + num);


    if (num == 1 && one == false) {

        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });




        one = true
    } else if (num == 2 && two == false) {
        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });


        two = true
    } else if (num == 3 && three == false) {
        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });


        three = true
    } else if (num == 4 && four == false) {
        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });


        four = true
    } else if (num == 5 && five == false) {
        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });


        five = true
    } else if (num == 6 && six == false) {
        animationSkipForward = bodymovin.loadAnimation({
            container: iconSkipForward,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
        });


        six = true
    }





    animationSkipForward.playSegments([0, 60], true);



}

function createAnimPlay() {
    animationSkipForward = bodymovin.loadAnimation({
        container: iconSkipForward,
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: "https://assets8.lottiefiles.com/packages/lf20_zvhkEU.json"
    });
}