// Pop up
// buttonevent.onclick = () => {
//   window.open('https://pintreach-bw.netlify.com',name, width=200,height=100);
// };



//Event listener to prevent user from leaving the home page

// window.addEventListener('beforeunload', (event)=> {
//     event.preventDefault()
//     event.returnValue = 'Are you sure you want to leave?'
// });




function colorChange() {
    let x = Math.floor(Math.random() * 248);
    let y = Math.floor(Math.random() * 248);
    let z = Math.floor(Math.random() * 248);
    let linkColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    return linkColor;
}


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