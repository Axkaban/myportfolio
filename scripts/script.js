button = document.querySelector("button");
body = document.querySelector("body")

button.addEventListener('click', ()=>{
   body.classList.toggle('open');
   body.setAttribute('style', 'overflow: scroll;');
   button.setAttribute('style', 'z-index: 0;');
   window.scroll(0,0);
  
});

// window.scroll(()=>{

// })
 if(window.innerHeight > 100 ){
    document.querySelector("main").classList.toggle('show');
    console.log('scrolling');
 };

 