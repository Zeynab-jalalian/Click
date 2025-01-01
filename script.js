let btn=document.querySelector('body');
btn.addEventListener('click',function(e){
let x=e.clientX;
let y=e.clientY;

let tag=document.createElement('span');
document.body.appendChild(tag);
tag.style.left=x+'px';
tag.style.top=y+'px';


})