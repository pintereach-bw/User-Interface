//Event listener to prevent user from leaving the home page

// window.addEventListener('beforeunload', (event)=> {
//     event.preventDefault()
//     event.returnValue = 'Are you sure you want to leave?'
// });


//Event listener that changes the color of nav buttons
/*let navevent = document.querySelectorAll('.hover');
console.log(navevent);
navevent.forEach(function(link,i){
 link.addEventListener('mouseover', function(){
 navevent[i].style.color = 'purple';
 });

 link.addEventListener('mouseleave', function(){
     navevent[i].style.color = 'black';
 });
}); */

function colorChange() {
    let x = Math.floor(Math.random() * 200);
    let y = Math.floor(Math.random() * 200);
    let z = Math.floor(Math.random() * 200);
    let linkColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return linkColor;
}

let navevent = document.querySelectorAll('.hover');
console.log(navevent);
navevent.forEach(function(link,i){
 link.addEventListener('mouseover', function(){
 navevent[i].style.color = colorChange();
 });

 link.addEventListener('mouseleave', function(){
     navevent[i].style.color = 'black';
 });
});

let buttonevent = document.querySelector('.join-btn');
console.log(buttonevent);
 buttonevent.addEventListener('mouseover', function(){
 buttonevent.style.color = colorChange();
 buttonevent.style.backgroundColor ='white';
 });

 buttonevent.addEventListener('mouseleave', function(){
     buttonevent.style.color = 'white';
     buttonevent.style.backgroundColor ='red';

});

let startbutton = document.querySelector('.start-btn');
console.log(startbutton);
 startbutton.addEventListener('mouseover', function(){
 startbutton.style.color = colorChange();
 startbutton.style.backgroundColor ='white';
 });

 startbutton.addEventListener('mouseleave', function(){
     startbutton.style.color = 'white';
     startbutton.style.backgroundColor ='red';

});