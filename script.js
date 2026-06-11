const canvas=document.getElementById('matrix');
const ctx=canvas.getContext('2d');
const fontSize=18;
let columns=0;
let drops=[];
const letters='BAKESONNNAMOR❤FELIZ20CUMPLE0101';

function resize(){
  canvas.width=window.innerWidth;
  canvas.height=window.innerHeight;
  columns=Math.floor(canvas.width/fontSize);
  drops=Array(columns).fill(1);
}
resize();
window.addEventListener('resize',resize);

function drawMatrix(){
  ctx.fillStyle='rgba(2,0,8,0.14)';
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle='#ff4fa3';
  ctx.font=fontSize+'px monospace';
  for(let i=0;i<drops.length;i++){
    const text=letters[Math.floor(Math.random()*letters.length)];
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>canvas.height&&Math.random()>0.975)drops[i]=0;
    drops[i]++;
  }
}
setInterval(drawMatrix,45);

const slides=[...document.querySelectorAll('.slide')];
const counter=document.getElementById('counter');
let index=0;

function showSlide(i){
  slides.forEach(s=>s.classList.remove('active'));
  slides[i].classList.add('active');
  counter.textContent=(i+1)+' / '+slides.length;
}

document.getElementById('next').addEventListener('click',()=>{
  if(index<slides.length-1){
    index++;
    showSlide(index);
  }
});

document.getElementById('prev').addEventListener('click',()=>{
  if(index>0){
    index--;
    showSlide(index);
  }
});

document.addEventListener('keydown',(e)=>{
  if(e.key==='ArrowRight') document.getElementById('next').click();
  if(e.key==='ArrowLeft') document.getElementById('prev').click();
});

showSlide(index);
