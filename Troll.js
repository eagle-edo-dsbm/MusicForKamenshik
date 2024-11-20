const helpBlock = document.querySelector('.help');
const helpBlock1 = document.querySelector('.help1');
const audio = new Audio("sounds/Монеточка – Шприц.mp3");
const audio1 = new Audio("sounds/Dr. Dre Feat. Snoop Dogg - Still D.R.E..mp3")
const stop_music = document.querySelector('.stop');

let currentAudio = null;


function playAudio(newAudio){
    if(currentAudio){
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = newAudio;
    currentAudio.play();
}

helpBlock.addEventListener('mouseenter', () => {
    playAudio(audio);
});


helpBlock1.addEventListener('mouseenter', ()=>{
    playAudio(audio1);
});



stop_music.addEventListener('click', () => {
    currentAudio.pause();
})