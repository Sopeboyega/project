document.addEventListener('DOMContentLoaded', function () {
    const stickman = document.getElementById('stickman');
    const button = document.querySelector('button');
  
    let isJumping = false;
    let isThrowing = false;
  
    button.addEventListener('click', throwObject);
  
    function jump() {
      if (!isJumping) {
        isJumping = true;
        let jumpCount = 0;
        const jumpInterval = setInterval(function () {
          let jumpHeight = 150;
          if (jumpCount >= 3) {
            clearInterval(jumpInterval);
            isJumping = false;
            return;
          }
          stickman.style.bottom = jumpHeight + 'px';
          setTimeout(function () {
            stickman.style.bottom = '0px';
          }, 300);
          jumpCount++;
        }, 1000);
      }
    }
  
    function throwObject() {
      if (!isThrowing) {
        isThrowing = true;
        const object = document.createElement('div');
        object.classList.add('object');
        object.style.left = stickman.offsetLeft + 'px';
        object.style.bottom = '150px';
        document.body.appendChild(object);
        const throwInterval = setInterval(function () {
          let currentBottom = parseInt(object.style.bottom);
          if (currentBottom >= window.innerHeight) {
            clearInterval(throwInterval);
            isThrowing = false;
            object.remove();
            return;
          }
          object.style.bottom = (currentBottom + 10) + 'px';
        }, 50);
      }
    }
  
    document.addEventListener('keydown', function (e) {
      if (e.key === ' ' || e.key === 'Spacebar') {
        jump();
      }
    });
  });
  