var cube = document.createElement('div');
cube.style.width = '100px';
cube.style.height = '100px';
cube.style.backgroundColor = 'red';
cube.style.borderRadius = '0%';
document.body.appendChild(cube);
var radius = 0;
var direction = 1;
var interval = setInterval(function() {
  radius += direction;
  cube.style.borderRadius = radius + '%';
  if (radius == 100) {
    direction = -1;
  } else if (radius == 0) {
    direction = 1;
  }
}, 10);
cube.style.position = 'absolute';
cube.style.top = '50%';
cube.style.left = '50%';
cube.style.marginTop = '-50px';
cube.style.marginLeft = '-50px';
document.body.style.backgroundColor = '#333';
var isDarkMode = true;
var toggle = document.createElement('div');
toggle.style.width = '100px';
toggle.style.height = '100px';
toggle.style.backgroundColor = 'white';
toggle.style.position = 'absolute';
toggle.style.top = '50%';
toggle.style.left = '50%';
toggle.style.marginTop = '-50px';
toggle.style.marginLeft = '-50px';
toggle.style.borderRadius = '50%';
toggle.style.cursor = 'pointer';
toggle.addEventListener('click', function() {
  isDarkMode = !isDarkMode;
  if (isDarkMode) {
    document.body.style.backgroundColor = '#333';
  } else {
    document.body.style.backgroundColor = 'white';
  }
});
document.body.appendChild(toggle);
toggle.style.top = '0px';
toggle.style.left = '0px';
toggle.style.marginTop = '0px';
toggle.style.marginLeft = '0px';
/* add this image inside the circle "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Noun_Project_lightbulb_icon_1263005_cc.svg/1200px-Noun_Project_lightbulb_icon_1263005_cc.svg.png" */
var lightbulb = document.createElement('img');
lightbulb.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Noun_Project_lightbulb_icon_1263005_cc.svg/1200px-Noun_Project_lightbulb_icon_1263005_cc.svg.png';
lightbulb.style.width = '100px';
lightbulb.style.height = '100px';
lightbulb.style.position = 'absolute';
lightbulb.style.top = '0px';
lightbulb.style.left = '0px';
lightbulb.style.marginTop = '0px';
lightbulb.style.marginLeft = '0px';
lightbulb.style.borderRadius = '50%';
lightbulb.style.cursor = 'pointer';
toggle.appendChild(lightbulb);
cube.style.width = '200px';
cube.style.height = '200px';
cube.style.marginTop = '-100px';
cube.style.marginLeft = '-100px';
cube.style.width = '300px';
cube.style.height = '300px';
cube.style.marginTop = '-150px';
cube.style.marginLeft = '-150px';
var textBox = document.createElement('input');
textBox.type = 'text';
textBox.style.width = '200px';
textBox.style.height = '50px';
textBox.style.position = 'absolute';
textBox.style.bottom = '0px';
textBox.style.left = '0px';
textBox.style.marginBottom = '0px';
textBox.style.marginLeft = '0px';
document.body.appendChild(textBox);
var text = document.createElement('div');
text.innerHTML = 'input hex code';
text.style.width = '200px';
text.style.height = '50px';
text.style.position = 'absolute';
text.style.bottom = '50px';
text.style.left = '0px';
text.style.marginBottom = '0px';
text.style.marginLeft = '0px';
document.body.appendChild(text);
/* make it white text */
text.style.color = 'white';
/* make it fancy */
text.style.fontFamily = 'sans-serif';
text.style.fontSize = '20px';
text.style.fontWeight = 'bold';
text.style.textAlign = 'center';
text.style.lineHeight = '50px';
var goButton = document.createElement('div');
goButton.innerHTML = 'go';
goButton.style.width = '50px';
goButton.style.height = '50px';
goButton.style.position = 'absolute';
goButton.style.bottom = '0px';
goButton.style.left = '200px';
goButton.style.marginBottom = '0px';
goButton.style.marginLeft = '0px';
goButton.style.backgroundColor = 'white';
goButton.style.borderRadius = '50%';
goButton.style.cursor = 'pointer';
document.body.appendChild(goButton);
/* make it fancy and center the text */
goButton.style.fontFamily = 'sans-serif';
goButton.style.fontSize = '20px';
goButton.style.fontWeight = 'bold';
goButton.style.textAlign = 'center';
goButton.style.lineHeight = '50px';
goButton.addEventListener('click', function() {
  cube.style.backgroundColor = textBox.value;
});
