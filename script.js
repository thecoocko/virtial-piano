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
/**active*/
const letters = document.querySelector('.btn-letters');
const notes = document.querySelector('.btn-notes');
const pianoSharp = document.querySelectorAll('.sharp');
letters.addEventListener('click',()=>{
    letters.classList.add('btn-active');
    if(notes.classList.contains('btn-active')) notes.classList.remove('btn-active');
    for(let i = 0; i < pianoSharp.length; i++){
        pianoSharp[i].style.display = 'none'
    }
});
notes.addEventListener('click',()=>{
    notes.classList.add('btn-active');
    if(letters.classList.contains('btn-active')) letters.classList.remove('btn-active');
});

