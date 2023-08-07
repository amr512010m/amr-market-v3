var lefta= document.getElementById('left');
var righta= document.getElementById('right');
var slider =document.getElementById('deal');
slider.style.backgroundImage= 'url('+images[i]+')';
var i;
var images=['image2.png','imagey.jpg','image1.png']
lefta.onclick  = function() {
    slider.style.backgroundImage='url('+images[i-1]+')';
    i=i-1;
}
righta.onclick  = function() {
    slider.style.backgroundImage='url('+images[i+1]+')';
    i=i+1;
}

