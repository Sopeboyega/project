function scrambleAndSolve() {
    let cube = document.querySelector('.cube');
    cube.style.transform = 'rotateX(360deg) rotateY(360deg) rotateZ(360deg)';
    setTimeout(() => {
      cube.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg)';
    }, 2000);
  }
  