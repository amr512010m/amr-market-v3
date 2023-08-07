console.log('amr')
var lefta= document.getElementById('left');
var righta= document.getElementById('right');
var slider =document.getElementById('deal');
slider.style.backgroundImage= 'url('image2.png')';
var i;
var images=['image2.png','imagey.jpg','image1.png']
lefta.onclick  = function() {
    slider.style.backgroundImage='url('+images[i-1]+')';
    i=i-1;
    console.log('left')
}
righta.onclick  = function() {
    slider.style.backgroundImage='url('+images[i+1]+')';
    i=i+1;
    console.log('right')
}

