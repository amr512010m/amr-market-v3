console.log('amr')
var lefta = document.getElementById('left');
var righta = document.getElementById('right');
var slider = document.getElementById('deal');
var images = ['image2.png','imagey.jpg','oip.jpeg','imagez.jpg','letter-a.png'];
var mode = document.getElementById('m')
var darkm = document.getElementById('d')
var i;
i = 0;

slider.style.backgroundImage = "url("+images[i]+")";
lefta.onclick  = function() {
  
   slider.style.backgroundImage = "url("+images[i-1]+")";
    console.log('left');
    i = i-1;
}
righta.onclick  = function() {
    slider.style.backgroundImage = "url("+images[i+1]+")";
i = i +1;
    console.log('right');
    
}
window.onscrolld =function(){lefta.style.display =' none';righta.style.display =' none';}
    window.onscrollu =function(){lefta.style.display =' inline-block';righta.style.display ='inline-block';}
darkm.onclick = function(){
    darkm.src = 'xxxx.png';
    mode.style.backgroundColor = 'gray';
    console.log('dark mode is on')
    darkm.onclick=function(){darkm.src='light-bulb.png'; mode.style.backgroundColor = 'skyblue';console.log('dark mode is off'); }
    
}
window.onscroll =function(){lefta.style.display =' none';righta.style.display =' none';}

