const hours=document.getElementById('hours');
const mins=document.getElementById('minutes');
const secs=document.getElementById('seconds');
const msecs=document.getElementById('milli-sec');
const btnReset=document.getElementById('reset');
const btn=document.querySelector('a i');
console.log(btn);
// const btnPause=document.querySelector('.pause');

 let [h, m, s, ms]=[0, 0, 0, 0];
 let id;

function start(){
    ms+=10;
    if(ms==1000){
       ms=0;
       s++;
       if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
        }
       }
    }
   
    msecs.textContent=ms;
    secs.textContent=s<10? `0${s}` : s;
    mins.textContent=m<10? `0${m}` : m; 
    hours.textContent=m<10? `0${h}` : h; 
   }
   
    


btn.addEventListener('click',()=>{
    if(btn.classList.contains('fa-play')){
        btn.classList.replace('fa-play', 'fa-pause');
        id=setInterval(start, 10);
    }else{
        btn.classList.replace('fa-pause', 'fa-play');
        clearInterval(id);
    }
} );

btnReset.addEventListener('click', ()=>{
    clearInterval(id);
    msecs.textContent='00';
    secs.textContent='00';
    mins.textContent='00'; 
    hours.textContent='00'; 
    btn.classList.replace('fa-pause', 'fa-play');
})

