//https://codepen.io/lemmin/pen/KaLmVa
var images = document.querySelectorAll('img.zoomable');

for (var i=0; i<images.length; i++) {
  var image = images[i];
  image.onclick = image.ontouchend = zoomImage;
}

function zoomImage () {
  var window_ratio = window.innerWidth/window.innerHeight;
  var image_size = this.getBoundingClientRect();
  var image_ratio = image_size.width/image_size.height;
  // NOTE: Scale really throws off the translation, so it needs to be
  // accounted for in the math.
  if (window.innerWidth/image_ratio > window.innerHeight) {
    // Match Height.
    var scale = window.innerHeight/image_size.height;
    var moveX = (((window.innerWidth-(image_size.width*scale))/2)/scale)-(image_size.left/scale);
    var moveY = -(image_size.top/scale);
  }
  else {
    // Match Width.
    var scale = window.innerWidth/image_size.width;
    var moveX = -(image_size.left/scale);
    var moveY = (((window.innerHeight-(image_size.height*scale))/2)/scale)-(image_size.top/scale);
  }
  
  this.style.transform = 'scale(' + scale + ') translate3d(' + moveX + 'px, ' + moveY + 'px, 1px)';
  this.classList.add('zoomed');
  this.onclick = this.ontouchend = resetImage;
}

function resetImage () {
  this.style.transform = '';
  this.classList.remove('zoomed');
  this.onclick = this.ontouchend = zoomImage;
}