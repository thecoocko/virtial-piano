/*fullscreen */
const fullscreen = document.querySelector('.fullscreen').addEventListener('click', ()=>{
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
});
const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');
const piano = document.getElementsByClassName('piano');
const keys = document.querySelectorAll('.piano-key')
/**music */
window.addEventListener('keypress', e=>{
    if(e.code === 'KeyD') playmusic('assets/audio/c.mp3'); 
    if(e.code === 'KeyF') playmusic('assets/audio/d.mp3');
    if(e.code === 'KeyG') playmusic('assets/audio/e.mp3');
    if(e.code === 'KeyH') playmusic('assets/audio/f.mp3');
    if(e.code === 'KeyJ') playmusic('assets/audio/g.mp3');
    if(e.code === 'KeyK') playmusic('assets/audio/a.mp3');
    if(e.code === 'KeyL') playmusic('assets/audio/b.mp3');
    /**key sharp */
    if(e.code === 'KeyR') playmusic('assets/audio/c♯.mp3');
    if(e.code === 'KeyT') playmusic('assets/audio/d♯.mp3');
    if(e.code === 'KeyU') playmusic('assets/audio/f♯.mp3');
    if(e.code === 'KeyI') playmusic('assets/audio/g♯.mp3');
    if(e.code === 'KeyO') playmusic('assets/audio/a♯.mp3');
});

/**play music */
function playmusicMouse(){
    const audio = new Audio('assets/audio/a♯.mp3')
    audio.currentTIme = 0;
    audio.load();
    audio.play();
}
function playmusic(url){
    const audio = new Audio(url)
    audio.currentTIme = 0;
    audio.load();
    audio.play();
}
piano[0].addEventListener('click',(e)=>{
    if(e.target.dataset.note === 'c') {
        playmusic('assets/audio/c.mp3');
        e.target.classList.add('active-key');
        setTimeout(()=>{
            e.target.classList.remove('active-key')
        }, 200)
    }
    if(e.target.dataset.note === 'd') {
        playmusic('assets/audio/d.mp3')
        e.target.classList.add('active-key');
        setTimeout(()=>{
            e.target.classList.remove('active-key')
        }, 200)
    }
    if(e.target.dataset.note === 'e') {playmusic('assets/audio/e.mp3');e.target.classList.add('active-key');setTimeout(()=>{e.target.classList.remove('active-key')}, 200)}
    if(e.target.dataset.note === 'f') {playmusic('assets/audio/f.mp3'); e.target.classList.add('active-key'); setTimeout(()=>{e.target.classList.remove('active-key')}, 200)}
    if(e.target.dataset.note === 'g') {playmusic('assets/audio/g.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    if(e.target.dataset.note === 'a') {playmusic('assets/audio/a.mp3') ;e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    if(e.target.dataset.note === 'b') {playmusic('assets/audio/b.mp3') ; e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    /**key sharp */
    if(e.target.dataset.note === 'c♯') {playmusic('assets/audio/c♯.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
}, 200)}
    if(e.target.dataset.note === 'd♯') {playmusic('assets/audio/d♯.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    if(e.target.dataset.note === 'f♯') {playmusic('assets/audio/f♯.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    if(e.target.dataset.note === 'g♯') {playmusic('assets/audio/g♯.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    if(e.target.dataset.note === 'a♯') {playmusic('assets/audio/a♯.mp3'); e.target.classList.add('active-key');
    setTimeout(()=>{
        e.target.classList.remove('active-key')
    }, 200)}
    })

btnLetters.addEventListener('click',()=>{
    btnLetters.classList.add('btn-active');
    if(btnNotes.classList.contains('btn-active')) btnNotes.classList.remove('btn-active'); 
    for(i of keys) {
        i.classList.add('piano-key-letter')
    };
});
btnNotes.addEventListener('click',()=>{
    btnNotes.classList.add('btn-active');
    if(btnLetters.classList.contains('btn-active')) btnLetters.classList.remove('btn-active');
    for(i of keys) {
        i.classList.remove('piano-key-letter')
    };
});


