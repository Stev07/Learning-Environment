const btn1=document.querySelector("[href='#explication']");
const btn2=document.querySelector("[href='#histoire']");
const btn3=document.querySelector("[href='#outils']");
const id1=document.querySelector("#explication");
const id2=document.querySelector("#histoire");
const id3=document.querySelector("#outils");

btn1.addEventListener('click', ()=>{
  id1.classList.toggle('bounceIn')
})

btn2.addEventListener('click', ()=>{
  id2.classList.toggle('bounceIn')
})

btn3.addEventListener('click', ()=>{
  id3.classList.toggle('bounceIn')
})
