

var audio = document.getElementById("player");
var isPlay = false;
var playPauseElementBtn = document.getElementById("play-pause");
var timerId;



window.onload = function() {
    setTimeout(loadAudioTime, 1000)
}

function loadAudioTime() {
    document.getElementById("total-duration").innerText = readableDuration(audio.duration);
    document.getElementById("audio-progress").max = audio.duration;
}



function playPause() {
    if (isPlay) {
        isPlay = false;
        audio.pause();
        playPauseElementBtn.innerHTML = "<i class='fas fa-play'></i>";
        clearTimeout(timerId);
    } else {
        isPlay = true;
        audio.play();
        playPauseElementBtn.innerHTML = "<i class='fas fa-pause'></i>";
        setProgressBarValue();
    }
}

function setProgressBarValue() {
    document.getElementById("current-duration").innerText = readableDuration(audio.currentTime);
    document.getElementById("audio-progress").value = audio.currentTime;
    timerId = setTimeout(setProgressBarValue, 1000);
}

function changeAudioTime() {
    clearTimeout(timerId);
    audio.currentTime = document.getElementById("audio-progress").value;
    setProgressBarValue();
}

function volumeDown() {
    var currentVolume = audio.volume;
    audio.volume = currentVolume - 0.1;
}

function volumeUp(){
    var currentVolume = audio.volume;
    audio.volume = currentVolume + 0.1;
}


function readableDuration(seconds) {
    sec = Math.floor( seconds );
    min = Math.floor( sec / 60 );
    min = min >= 10 ? min : '0' + min;
    sec = Math.floor( sec % 60 );
    sec = sec >= 10 ? sec : '0' + sec;
    return min + ':' + sec;
}
