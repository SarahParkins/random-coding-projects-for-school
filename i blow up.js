var bomb = document.createElement('img');
bomb.src = 'https://www.freeiconspng.com/thumbs/bomb-png/high-resolution-bomb-png-clipart-2.png';
bomb.style.position = 'absolute';
bomb.style.left = '50%';
bomb.style.top = '50%';
bomb.style.transform = 'translate(-50%, -50%)';
document.body.appendChild(bomb);
bomb.style.width = '200px';
bomb.addEventListener('click', function() {
  var explosion = document.createElement('img');
  explosion.src = 'https://www.freeiconspng.com/thumbs/explosion-png/explosion-transparent-png-picture-1.png';
  explosion.style.position = 'absolute';
  explosion.style.left = '50%';
  explosion.style.top = '50%';
  explosion.style.transform = 'translate(-50%, -50%)';
  explosion.style.width = '800px';
  document.body.appendChild(explosion);
  setTimeout(function() {
    document.body.removeChild(explosion);
  }, 2646);
});
bomb.addEventListener('click', function() {
  var text = document.createElement('div');
  text.innerHTML = 'i blow up into smithereens';
  text.style.position = 'absolute';
  text.style.left = '50%';
  text.style.top = '50%';
  text.style.transform = 'translate(-50%, -50%)';
  text.style.fontFamily = 'sans-serif';
  text.style.fontSize = '100px';
  text.style.color = 'white';
  text.style.textShadow = '0 0 10px black';
  document.body.appendChild(text);
  setTimeout(function() {
    document.body.removeChild(text);
  }, 2646);
});
bomb.addEventListener('click', function() {
  document.body.removeChild(bomb);
});
var reset = document.createElement('button');
reset.innerHTML = 'reset';
reset.style.position = 'absolute';
reset.style.left = '50%';
reset.style.top = '50%';
reset.style.transform = 'translate(-50%, -50%)';
reset.style.fontFamily = 'sans-serif';
reset.style.fontSize = '100px';
reset.style.color = 'white';
reset.style.textShadow = '0 0 10px black';
reset.addEventListener('click', function() {
  document.body.appendChild(bomb);
});
document.body.appendChild(reset);
reset.style.left = '0';
reset.style.top = '0';
reset.style.transform = 'translate(0, 0)';
