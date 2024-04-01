const themeToggle = document.getElementById('theme-toggle')
const iconEl = document.querySelector('.fa-solid.fa-question.fa-bounce.fa-lg.Player');
;
const videoInput = document.getElementById('video-input');
const videoPlayer = document.getElementById('video-player');
const videoContainerEl = document.querySelector('.video-container')
const body = document.body;

themeToggle.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
});



videoInput.addEventListener('change', function(event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    videoPlayer.src = url;
});

iconEl.addEventListener("click", function(){
  iconEl.style.display = 'none';
  videoContainerEl.style.visibility = 'visible'
    
})