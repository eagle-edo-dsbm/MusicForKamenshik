const helpBlock = document.querySelector('.help');
const audio = new Audio("sounds/Монеточка – Шприц.mp3");

helpBlock.addEventListener('mouseenter', () => {
    audio.play().catch(error => {
    });
});

/*helpBlock.addEventListener('mouseleave', () => {
    audio.pause();
    audio.currentTime = 0;
});*/
